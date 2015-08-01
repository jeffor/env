# pyenv

 - **pyenv用于在不同项目中实现不同python版本的管理和切换**

## pyenv 安装步骤                                   
                                                   
 1. 获得 pyenv 源码:                               
                                                   
  ```                                              
   git clone https://github.com/yyuu/pyenv.git ~/.pyenv
  ```                                              
                                                   
 2. 定义环境变量                                   
                                                   
  ```                                              
   echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
   echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
  ```                                              
                                                   
 3. 添加 pyenv 初始化指令                          
                                                   
  ```                                              
   echo 'eval "$(pyenv init -)"' >> ~/.bash_profile
  ```                                              
                                                   
 > Zsh note: Modify your ~/.zshenv file instead of ~/.bash_profile. Ubuntu note: Modify your ~/.bashrc file instead of ~/.bash_profile.
                                                   
                                                   
## pyenv 更新步骤                                   
                                                   
 ```                                               
  cd ~/.pyenv                                      
  git pull                                         
 ```                                               
                                                   
## pyenv 使用说明                                   
                                                   
 [pyenv commands](https://github.com/yyuu/pyenv/blob/master/COMMANDS.md#pyenv-which)
 > 如果命令行下载安装Python太慢，可以将下载的安装包放入~/.pyenv/cache/文件夹中，之后安装
 > Pyenv默认使用的是Github Pages， 在国内访问很慢,可以设置成七牛的镜像提高下载速度:
 > `export PYTHON_BUILD_MIRROR_URL="http://pyenv.qiniudn.com/pythons/"`
 > 每次安装完python版本后都要执行 `pyenv rehash` 

---

# pyenv-virtualenv 插件

 - **pyenv-virtualenv 是一个pyenv插件，用于管理创建和管理 virtualenv**

## 安装步骤

 1. 获得源码(将源码clone到pyenv的plugins目录下)
 
  ```
   git clone https://github.com/yyuu/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv
  ```

 2. 添加 pyenv virtualenv 初始化指令

  ```
   echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bash_profile
  ```
 > Zsh note: Modify your ~/.zshenv file instead of ~/.bash_profile. Ubuntu note: Modify your ~/.bashrc file instead of ~/.bash_profile.


## 使用 pyenv virtualenv

 1. 创建 virtualenv

  ```
   pyenv virtualenv 2.7.10 ENV
  ```

 该命令会在 ~/.pyenv/versions/下创建 基于`python 2.7.10`的virtualenv。
 若想创建基于当前python版本的virtalenv，只需要执行 `pyenv virtualenv ENV` 即可。

 2. 列出所有安装的 virtualenv

  ```
   pyenv virtualenvs
  ```

 3. 激活虚拟机 和 取消虚拟机激活状态

  ```
   pyenv active <name>
   pyenv deactive
  ```

 4. 删除一个virtualenv

  ```
   pyenv uninstall <name>
  ```

