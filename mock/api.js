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
          { ip: '127.0.0.1', serviceCount: 147 },
          { ip: '147.25.25.25', serviceCount: 258 },
          { ip: '127.0.0.1', serviceCount: 147 },
          { ip: '147.25.25.25', serviceCount: 258 },
        ],
        portData: [
          { port: 22, service: 'SSH', count: 233 },
          { port: 23, service: 'SSH', count: 258 },
          { port: 25, service: 'HTTPS', count: 145 },
          { port: 26, service: 'FTP', count: 369 },
        ],
        flawData: [
          { name: '阿帕契服务器文件读取漏洞', url: 'http://www.webray.com.cn' },
          { name: 'Citrix路径遍历漏洞', url: 'http://www.webray.com.cn' },
          { name: 'Tomcat任意文件上传漏洞', url: 'http://www.webray.com.cn' },
          { name: '败者食尘技能漏洞', url: 'http://www.webray.com.cn' },
        ],
        weakPawdData: [
          { name: '阿帕契服务器文件读取漏洞', url: 'http://www.webray.com.cn' },
          { name: 'Citrix路径遍历漏洞', url: 'http://www.webray.com.cn' },
          { name: 'Tomcat任意文件上传漏洞', url: 'http://www.webray.com.cn' },
          { name: '败者食尘技能漏洞', url: 'http://www.webray.com.cn' },
        ],
        pocData: [
          { name: '阿帕契服务器文件读取漏洞', url: 'http://www.webray.com.cn' },
          { name: 'Citrix路径遍历漏洞', url: 'http://www.webray.com.cn' },
          { name: 'Tomcat任意文件上传漏洞', url: 'http://www.webray.com.cn' },
          { name: '败者食尘技能漏洞', url: 'http://www.webray.com.cn' },
        ],
        expData: [
          { name: '阿帕契服务器文件读取漏洞', url: 'http://www.webray.com.cn' },
          { name: 'Citrix路径遍历漏洞', url: 'http://www.webray.com.cn' },
          { name: 'Tomcat任意文件上传漏洞', url: 'http://www.webray.com.cn' },
          { name: '败者食尘技能漏洞', url: 'http://www.webray.com.cn' },
        ],
        vendorData: [
          { vendor: 'Google', assetCount: 233 },
          { vendor: 'FaceBook', assetCount: 214 },
          { vendor: 'Apple', assetCount: 415 },
          { vendor: 'WebRay', assetCount: 852 },
        ],
        osData: [
          { os: 'Linux', count: 233 },
          { os: 'Windows', count: 124 },
          { os: 'MacOS', count: 258 },
          { os: 'Android', count: 296 },
        ],
      },
    },
  },
};
