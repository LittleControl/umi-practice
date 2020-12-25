import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Button } from 'antd';
const originData = [
  // { id: 'ord001', ip: '127.0.0.1', mask: '255.255.255.0' },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingID, setEditingID] = useState('');

  const isEditing = record => record.id === editingID;

  const edit = record => {
    form.setFieldsValue({
      ip: '',
      mask: '',
      ...record,
    });
    setEditingID(record.id);
  };

  const cancel = () => {
    setEditingID('');
  };

  const save = async id => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingID('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingID('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'IP地址',
      dataIndex: 'ip',
      width: '30%',
      editable: true,
    },
    {
      title: '子网掩码',
      dataIndex: 'mask',
      width: '30%',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingID !== ''} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const handleAddClick = () => {
    const id = Date.now();
    const record = { id, ip: '', mask: '' };
    const newData = [...data];
    newData.push(record);
    setData(newData);
    edit(record);
  };
  return (
    <>
      <br />
      <Button type="primary" ghost onClick={handleAddClick}>
        新增
      </Button>
      <br />
      <p>支持IPV4以及IPV6网络地址</p>
      <p>
        IPv6示例: 2001:fecd:ba23:cd1f:dcb1:1010:9234:4088 IPv6子网前缀长度:
        2位数字, 如64
      </p>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          rowKey={'id'}
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
};

export default EditableTable;
