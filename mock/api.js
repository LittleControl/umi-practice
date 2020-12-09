export default {
  'GET /api/controlcenter': {
    success: true,
    data: {
      tags: {
        flawCount: 1,
        weakPawdCount: 2,
        verSuccess: 3,
        useSuccess: 4,
      },
      assets: {
        allAssets: 4396,
        switch: 2200,
        industrial: 777,
        lot: 404,
        others: 1015,
      },
      mids: {
        ipData: [
          { id: 'i1', ip: '127.0.0.1', serviceCount: 147 },
          { id: 'i2', ip: '147.25.25.25', serviceCount: 258 },
          { id: 'i3', ip: '127.0.0.1', serviceCount: 147 },
          { id: 'i4', ip: '147.25.25.25', serviceCount: 258 },
        ],
        portData: [
          { id: 'p1', port: 22, service: 'SSH', pcount: 233 },
          { id: 'p2', port: 23, service: 'SSH', pcount: 258 },
          { id: 'p3', port: 25, service: 'HTTPS', pcount: 145 },
          { id: 'p4', port: 26, service: 'FTP', pcount: 369 },
        ],
        flawData: [
          {
            id: 'f1',
            name: '阿帕契服务器文件读取漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'f2',
            name: 'Citrix路径遍历漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'f3',
            name: 'Tomcat任意文件上传漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'f4',
            name: '败者食尘技能漏洞',
            url: 'http://www.webray.com.cn',
          },
        ],
        weakPawdData: [
          {
            id: 'w1',
            name: '阿帕契服务器文件读取漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'w2',
            name: 'Citrix路径遍历漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'w3',
            name: 'Tomcat任意文件上传漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'w4',
            name: '败者食尘技能漏洞',
            url: 'http://www.webray.com.cn',
          },
        ],
        pocData: [
          {
            id: 'p1',
            name: '阿帕契服务器文件读取漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'p2',
            name: 'Citrix路径遍历漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'p3',
            name: 'Tomcat任意文件上传漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'p4',
            name: '败者食尘技能漏洞',
            url: 'http://www.webray.com.cn',
          },
        ],
        expData: [
          {
            id: 'e1',
            name: '阿帕契服务器文件读取漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'e2',
            name: 'Citrix路径遍历漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'e3',
            name: 'Tomcat任意文件上传漏洞',
            url: 'http://www.webray.com.cn',
          },
          {
            id: 'e4',
            name: '败者食尘技能漏洞',
            url: 'http://www.webray.com.cn',
          },
        ],
        vendorData: [
          { id: 'v1', vendor: 'Google', assetCount: 233 },
          { id: 'v2', vendor: 'FaceBook', assetCount: 214 },
          { id: 'v3', vendor: 'Apple', assetCount: 415 },
          { id: 'v4', vendor: 'WebRay', assetCount: 852 },
        ],
        osData: [
          { id: 'o1', os: 'Linux', ocount: 233 },
          { id: 'o2', os: 'Windows', ocount: 124 },
          { id: 'o3', os: 'MacOS', ocount: 258 },
          { id: 'o4', os: 'Android', ocount: 296 },
        ],
      },
    },
  },
  'GET /api/targetdetection': {
    success: true,
    data: {
      tableData: [
        {
          id: 't1',
          target: '127.0.0.1',
          port: 22,
          service: 'SSH',
          os: 'Linux',
          type: '路由设备',
          vendor: 'Google',
          task: 'test1',
        },
        {
          id: 't2',
          target: '192.168.1.1',
          port: 80,
          service: 'HTTP',
          os: 'Windows',
          type: '云服务资源',
          vendor: 'MicroSoft',
          task: 'test2',
        },
        {
          id: 't3',
          target: '125.2.3.78',
          port: 443,
          service: 'HTTPS',
          os: 'MacOS',
          type: '物联网设备',
          vendor: 'Apple',
          task: 'test3',
        },
        {
          id: 't4',
          target: '178.36.54.89',
          port: 23,
          service: 'FTP',
          os: 'Android',
          type: '移动设备',
          vendor: 'Sumsung',
          task: 'test4',
        },
      ],
    },
  },
};
