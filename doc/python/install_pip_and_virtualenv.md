# pip

 - **pip 是python的包安装工具，可以实现依赖包的快速安装**

## 安装pip

  1. 下载 [get-pip.py](https://bootstrap.pypa.io/get-pip.py)
  2. python get-pip.py 实现安装

## pip配置

  1. pip安装第三方包时默认从国外镜像下载，这样会很慢。为了加快速度可以配置成国内源:

   ```
    #在 ~/.pip/pip.conf 中配置如下
    [global]
    timeout = 30
    download-cache = /tmp
    require-virtualenv = true
    trusted-host = mirrors.aliyun.com  
    index-url = http://mirrors.aliyun.com/pypi/simple/ 
   ```

## pip使用

 - [pip使用见官网文档](https://pip.pypa.io/en/stable/)

---

# 安装 virtualev

 ```
  pip install virtualenv
 ```
