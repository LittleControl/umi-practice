// export default {
//   'GET /api/controlcenter': {
//     success: true,
//     data: {
//       tags: {
//         bug_count: 1,
//         weakpawd_count: 2,
//         poc_count: 3,
//         exp_count: 4,
//       },
//       assets: {
//         all_assets: 4396,
//         switch: 2200,
//         industrial: 777,
//         lot: 404,
//         others: 1015,
//       },
//       mids: {
//         ip_data: [
//           { id: 'i1', ip: '127.0.0.1', service_count: 147 },
//           { id: 'i2', ip: '147.25.25.25', service_count: 258 },
//           { id: 'i3', ip: '127.0.0.1', service_count: 147 },
//           { id: 'i4', ip: '147.25.25.25', service_count: 258 },
//         ],
//         port_data: [
//           { id: 'p1', port: 22, service: 'SSH', pcount: 233 },
//           { id: 'p2', port: 23, service: 'SSH', pcount: 258 },
//           { id: 'p3', port: 25, service: 'HTTPS', pcount: 145 },
//           { id: 'p4', port: 26, service: 'FTP', pcount: 369 },
//         ],
//         bug_data: [
//           {
//             id: 'f1',
//             name: '阿帕契服务器文件读取漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'f2',
//             name: 'Citrix路径遍历漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'f3',
//             name: 'Tomcat任意文件上传漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'f4',
//             name: '败者食尘技能漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//         ],
//         weakpawd_data: [
//           {
//             id: 'w1',
//             name: '阿帕契服务器文件读取漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'w2',
//             name: 'Citrix路径遍历漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'w3',
//             name: 'Tomcat任意文件上传漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'w4',
//             name: '败者食尘技能漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//         ],
//         poc_data: [
//           {
//             id: 'p1',
//             name: '阿帕契服务器文件读取漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'p2',
//             name: 'Citrix路径遍历漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'p3',
//             name: 'Tomcat任意文件上传漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'p4',
//             name: '败者食尘技能漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//         ],
//         exp_data: [
//           {
//             id: 'e1',
//             name: '阿帕契服务器文件读取漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'e2',
//             name: 'Citrix路径遍历漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'e3',
//             name: 'Tomcat任意文件上传漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//           {
//             id: 'e4',
//             name: '败者食尘技能漏洞',
//             url: 'http://www.webray.com.cn',
//           },
//         ],
//         vendor_data: [
//           { id: 'v1', vendor: 'Google', asset_count: 233 },
//           { id: 'v2', vendor: 'FaceBook', asset_count: 214 },
//           { id: 'v3', vendor: 'Apple', asset_count: 415 },
//           { id: 'v4', vendor: 'WebRay', asset_count: 852 },
//         ],
//         os_data: [
//           { id: 'o1', os: 'Linux', ocount: 233 },
//           { id: 'o2', os: 'Windows', ocount: 124 },
//           { id: 'o3', os: 'MacOS', ocount: 258 },
//           { id: 'o4', os: 'Android', ocount: 296 },
//         ],
//       },
//       apps: [
//         {
//           id: 'a1',
//           target: '任务目标',
//           port: '端口',
//           service: '服务',
//           vendor: '厂商',
//           os: '操作系统',
//           equiptype: '设备类型',
//           weakpasswd: '弱口令',
//           loophole: '漏洞',
//           poc: 'POC',
//           exp: 'EXP',
//           operate: '操作',
//         },
//         {
//           id: 'a2',
//           target: '172.18.0.1',
//           port: '22',
//           service: 'SSH',
//           vendor: '安钛克',
//           os: 'Ubuntu',
//           equiptype: '服务器',
//           weakpasswd: {
//             type: 'weakpasswd',
//             text: 3,
//             data: [
//               {
//                 id: 'd01',
//                 ip: '127.0.0.1',
//                 username: 'Little',
//                 passwd: 'Nothing',
//               },
//               {
//                 id: 'd02',
//                 ip: '192.168.1.1',
//                 username: 'Control',
//                 passwd: 'Iyuxuan',
//               },
//               {
//                 id: 'd03',
//                 ip: '255.255.255.255',
//                 username: 'Archer',
//                 passwd: '@Control',
//               },
//             ],
//           },
//           loophole: {
//             type: 'loophole',
//             text: '未检测',
//             data: [
//               {
//                 id: 'd04',
//                 level: 0,
//                 name: '缓冲区下溢漏洞',
//                 sort: 'Linux本地安全',
//                 type: '系统漏洞',
//               },
//               {
//                 id: 'd05',
//                 level: 0,
//                 name: '缓冲区溢出漏洞',
//                 sort: '安全设备',
//                 type: '系统漏洞',
//               },
//               {
//                 id: 'd06',
//                 level: 1,
//                 name: 'PHP5.6.x<5.6.33多个漏洞',
//                 sort: 'Web安全',
//                 type: 'WEB漏洞',
//               },
//               {
//                 id: 'd07',
//                 level: 2,
//                 name: '远程主机信息披露',
//                 sort: 'Windows安全',
//                 type: '系统漏洞',
//               },
//             ],
//           },
//           poc: {
//             type: 'poc',
//             text: 5,
//             data: [
//               {
//                 id: 'd08',
//                 level: 0,
//                 name: '远程文件包含',
//                 sort: '路由交换设备',
//                 vendor: 'D-Link',
//               },
//               {
//                 id: 'd09',
//                 level: 0,
//                 name: '反序列化漏洞',
//                 sort: '云服务资源',
//                 vendor: 'TP-Link',
//               },
//               {
//                 id: 'd10',
//                 level: 1,
//                 name: '未授权遍历',
//                 sort: '网页技术',
//                 vendor: 'Google',
//               },
//               {
//                 id: 'd11',
//                 level: 2,
//                 name: 'IIOP反序列化漏洞',
//                 sort: '网页技术',
//                 vendor: 'HUAWEI',
//               },
//             ],
//           },
//           exp: {
//             type: 'exp',
//             text: '未检测',
//             data: [
//               {
//                 id: 'd12',
//                 level: 0,
//                 name: '远程文件包含',
//                 sort: '路由交换设备',
//                 vendor: 'D-Link',
//               },
//               {
//                 id: 'd13',
//                 level: 0,
//                 name: '反序列化漏洞',
//                 sort: '云服务资源',
//                 vendor: 'TP-Link',
//               },
//               {
//                 id: 'd14',
//                 level: 1,
//                 name: '未授权遍历',
//                 sort: '网页技术',
//                 vendor: 'Google',
//               },
//               {
//                 id: 'd15',
//                 level: 2,
//                 name: 'IIOP反序列化漏洞',
//                 sort: '网页技术',
//                 vendor: 'HUAWEI',
//               },
//             ],
//           },
//           operate: {
//             type: 'operate',
//             text: 'nothing',
//           },
//         },
//         {
//           id: 'a3',
//           target: '',
//           port: '80',
//           service: 'HTTP',
//           vendor: 'Google',
//           os: 'Ubuntu',
//           equiptype: '云服务器资源',
//           weakpasswd: {
//             type: 'weakpasswd',
//             text: 6,
//             data: [
//               {
//                 id: 'd11',
//                 ip: '127.0.0.1',
//                 username: 'Little',
//                 passwd: 'Nothing',
//               },
//               {
//                 id: 'd12',
//                 ip: '192.168.1.1',
//                 username: 'Control',
//                 passwd: 'Iyuxuan',
//               },
//               {
//                 id: 'd13',
//                 ip: '255.255.255.255',
//                 username: 'Archer',
//                 passwd: '@Control',
//               },
//             ],
//           },
//           loophole: {
//             type: 'loophole',
//             text: '未检测',
//             data: [
//               {
//                 id: 'd14',
//                 level: 0,
//                 name: '缓冲区下溢漏洞',
//                 sort: 'Linux本地安全',
//                 type: '系统漏洞',
//               },
//               {
//                 id: 'd15',
//                 level: 0,
//                 name: '缓冲区溢出漏洞',
//                 sort: '安全设备',
//                 type: '系统漏洞',
//               },
//               {
//                 id: 'd16',
//                 level: 1,
//                 name: 'PHP5.6.x<5.6.33多个漏洞',
//                 sort: 'Web安全',
//                 type: 'WEB漏洞',
//               },
//               {
//                 id: 'd17',
//                 level: 2,
//                 name: '远程主机信息披露',
//                 sort: 'Windows安全',
//                 type: '系统漏洞',
//               },
//             ],
//           },
//           poc: {
//             type: 'poc',
//             text: '未检测',
//             data: [
//               {
//                 id: 'd18',
//                 level: 0,
//                 name: '远程文件包含',
//                 sort: '路由交换设备',
//                 vendor: 'D-Link',
//               },
//               {
//                 id: 'd19',
//                 level: 0,
//                 name: '反序列化漏洞',
//                 sort: '云服务资源',
//                 vendor: 'TP-Link',
//               },
//               {
//                 id: 'd20',
//                 level: 1,
//                 name: '未授权遍历',
//                 sort: '网页技术',
//                 vendor: 'Google',
//               },
//               {
//                 id: 'd21',
//                 level: 2,
//                 name: 'IIOP反序列化漏洞',
//                 sort: '网页技术',
//                 vendor: 'HUAWEI',
//               },
//             ],
//           },
//           exp: {
//             type: 'exp',
//             text: 4,
//             data: [
//               {
//                 id: 'd23',
//                 level: 0,
//                 name: '远程文件包含',
//                 sort: '路由交换设备',
//                 vendor: 'D-Link',
//               },
//               {
//                 id: 'd24',
//                 level: 0,
//                 name: '反序列化漏洞',
//                 sort: '云服务资源',
//                 vendor: 'TP-Link',
//               },
//               {
//                 id: 'd25',
//                 level: 1,
//                 name: '未授权遍历',
//                 sort: '网页技术',
//                 vendor: 'Google',
//               },
//               {
//                 id: 'd26',
//                 level: 2,
//                 name: 'IIOP反序列化漏洞',
//                 sort: '网页技术',
//                 vendor: 'HUAWEI',
//               },
//             ],
//           },
//           operate: {
//             type: 'operate',
//             text: 'something',
//           },
//         },
//         {
//           id: 'a4',
//           target: 'www.a.com',
//           port: '443',
//           service: 'HTTPS',
//           vendor: 'Lenovo',
//           os: 'Windows',
//           equiptype: '物联网设备',
//           weakpasswd: {
//             type: 'weakpasswd',
//             text: '未检测',
//             data: [
//               {
//                 id: 'd28',
//                 ip: '127.0.0.1',
//                 username: 'Little',
//                 passwd: 'Nothing',
//               },
//               {
//                 id: 'd29',
//                 ip: '192.168.1.1',
//                 username: 'Control',
//                 passwd: 'Iyuxuan',
//               },
//               {
//                 id: 'd30',
//                 ip: '255.255.255.255',
//                 username: 'Archer',
//                 passwd: '@Control',
//               },
//             ],
//           },
//           loophole: {
//             type: 'loophole',
//             text: 2,
//             data: [
//               {
//                 id: 'd31',
//                 level: 0,
//                 name: '缓冲区下溢漏洞',
//                 sort: 'Linux本地安全',
//                 type: '系统漏洞',
//               },
//               {
//                 id: 'd32',
//                 level: 0,
//                 name: '缓冲区溢出漏洞',
//                 sort: '安全设备',
//                 type: '系统漏洞',
//               },
//               {
//                 id: 'd33',
//                 level: 1,
//                 name: 'PHP5.6.x<5.6.33多个漏洞',
//                 sort: 'Web安全',
//                 type: 'WEB漏洞',
//               },
//               {
//                 id: 'd34',
//                 level: 2,
//                 name: '远程主机信息披露',
//                 sort: 'Windows安全',
//                 type: '系统漏洞',
//               },
//             ],
//           },
//           poc: {
//             type: 'poc',
//             text: '未检测',
//             data: [
//               {
//                 id: 'd35',
//                 level: 0,
//                 name: '远程文件包含',
//                 sort: '路由交换设备',
//                 vendor: 'D-Link',
//               },
//               {
//                 id: 'd36',
//                 level: 0,
//                 name: '反序列化漏洞',
//                 sort: '云服务资源',
//                 vendor: 'TP-Link',
//               },
//               {
//                 id: 'd37',
//                 level: 1,
//                 name: '未授权遍历',
//                 sort: '网页技术',
//                 vendor: 'Google',
//               },
//               {
//                 id: 'd38',
//                 level: 2,
//                 name: 'IIOP反序列化漏洞',
//                 sort: '网页技术',
//                 vendor: 'HUAWEI',
//               },
//             ],
//           },
//           exp: {
//             type: 'exp',
//             text: '未检测',
//             data: [
//               {
//                 id: '39',
//                 level: 0,
//                 name: '远程文件包含',
//                 sort: '路由交换设备',
//                 vendor: 'D-Link',
//               },
//               {
//                 id: '40',
//                 level: 0,
//                 name: '反序列化漏洞',
//                 sort: '云服务资源',
//                 vendor: 'TP-Link',
//               },
//               {
//                 id: '41',
//                 level: 1,
//                 name: '未授权遍历',
//                 sort: '网页技术',
//                 vendor: 'Google',
//               },
//               {
//                 id: '42',
//                 level: 2,
//                 name: 'IIOP反序列化漏洞',
//                 sort: '网页技术',
//                 vendor: 'HUAWEI',
//               },
//             ],
//           },
//           operate: {
//             type: 'operate',
//             text: 'Okay',
//           },
//         },
//       ],
//     },
//   },
//   'GET /api/targetdetection': {
//     success: true,
//     data: {
//       table_data: [
//         {
//           id: 't1',
//           target: '127.0.0.1',
//           port: 22,
//           service: 'SSH',
//           os: 'Linux',
//           type: '路由设备',
//           vendor: 'Google',
//           task: 'test1',
//         },
//         {
//           id: 't2',
//           target: '192.168.1.1',
//           port: 80,
//           service: 'HTTP',
//           os: 'Windows',
//           type: '云服务资源',
//           vendor: 'MicroSoft',
//           task: 'test2',
//         },
//         {
//           id: 't3',
//           target: '125.2.3.78',
//           port: 443,
//           service: 'HTTPS',
//           os: 'MacOS',
//           type: '物联网设备',
//           vendor: 'Apple',
//           task: 'test3',
//         },
//         {
//           id: 't4',
//           target: '178.36.54.89',
//           port: 23,
//           service: 'FTP',
//           os: 'Android',
//           type: '移动设备',
//           vendor: 'Sumsung',
//           task: 'test4',
//         },
//       ],
//     },
//   },
// };
