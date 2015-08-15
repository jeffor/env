# linux 安装JDK

## 1.下载最新版本的 jdk 包：

   - downl url： http://www.oracle.com/technetwork/java/javase/downloads/index.html

## 2. 配置环境变量：

- 假设 jdk 解压后存放为`/usr/local/env/jdk_1.8` 中，则在 `~/.bashrc` 中添加如下配置：

 ```
  export JAVA_HOME=/usr/local/env/jdk_1.8
  export JRE_HOME=$JAVA_HOME/jre
  export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
  export PATH=$JRE_HOME/bin:$JAVA_HOME/bin:$PATH
 ```

## 3. 激活&验证：

```
➜  ~  source ~/.bashrc
➜  ~  java -version   
java version "1.8.0_45"
Java(TM) SE Runtime Environment (build 1.8.0_45-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.45-b02, mixed mode)
```

## 4. 设置默认 java & javac：

```
➜  bin  sudo update-alternatives --install /usr/bin/java java $JAVA_HOME/bin/java 300
➜  bin  sudo update-alternatives --install /usr/bin/javac javac $JAVA_HOME/bin/javac 300
➜  bin  sudo update-alternatives --config java
➜  bin  sudo update-alternatives --config javac
```