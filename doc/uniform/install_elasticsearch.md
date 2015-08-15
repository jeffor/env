### 1. 安装 elasticsearch

1. 安装elasticsearch的唯一条件是必须安装 java [运行环境](http://www.java.com)
2. 下载最新版本的 [elasticsearch](https://www.elastic.co/downloads/elasticsearch)
3. 安装[marvel](https://www.elastic.co/products/marvel)

 **marvel 为 elasticsearch 的集群监控工具**

  - 直接从互联网下载安装：
  ```
  bin/plugin -i elasticsearch/marvel/lastest
  ```
  -  上面一种方法可能会因为网络原因安装失败，可以指定文件安装：
  ```
  ➜  elasticsearch  bin/plugin -i elasticsearch/marvel/lastest -u file:///home/jeffor/space/package/marvel-latest.zip
-> Installing elasticsearch/marvel/lastest...
Trying file:/home/jeffor/space/package/marvel-latest.zip...
Downloading ....................DONE
Installed elasticsearch/marvel/lastest into /home/jeffor/space/apps/elasticsearch/plugins/marvel
  ```

 - 若不想 marvel 监控elasticsearch 集群，可以配置如下：
 ```
 echo 'marvel.agent.enabled: false' >> ./config/elasticsearch.yml
 ```

### 2. 启动和关闭

1. 启动在前台：
	```
	./bin/elasticsearch
	```
	> 对于启动在前台的服务 使用 **ctl + c** 即可关闭服务

2. 启动在后台：
	```
	./bin/elasticsearch -d
	```
3. 使用marvel监控集群：

   在浏览器中打开 `http://localhost:9200/_plugin/marvel`

4. 关闭 elasticsearch 服务：

    `curl -XPOST "http://localhost:9200/_shutdown"`