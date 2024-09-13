# Cordova 将HTML打包成安卓app

> [!IMPORTANT]
> **重要的工具和资源：**
> * [NodeJs](https://nodejs.org/zh-cn/download/prebuilt-installer)
> * [Android Studio](https://developer.android.com/studio?hl=zh-cn)
> * [Gradle](https://gradle.org/releases/)
> * [Oracle Jdk](https://www.oracle.com/java/technologies/downloads/)


## 安装 NodeJs 与 Cordova

点击[NodeJs](https://nodejs.org/zh-cn/download/prebuilt-installer)下载安装包，下载完成后双击`.msi`文件正常安装即可。

![alt text](../../images/Cordova/image.png)

安装完后打开命令行（命令行参考[前置知识](/正式开始/前置知识#Windows10-如何打开命令行)），在命令行中输入 `node -v` 查看是否安装成功，安装成功后会显示具体的版本号。


![alt text](../../images/Cordova/image-1.png)

随后输入 `npm install -g cordova`，如果卡死或者无法访问可以使用淘宝的镜像仓库，如果安装成功执行 `cordova -v`。

```bash
npm config set registry https://registry.npmmirror.com
npm install -g cordova
cordova -v # 查看具体版本
```

## 安装 JDK 与 Gradle

点击[Oracle JDK](https://www.oracle.com/java/technologies/downloads/) 安装JDK 17下载 `x64 Compressed Archive` 的压缩包。

![alt text](../../images/Cordova/image-2.png)

将压缩包解压到任意位置，复制你解压的路径，注意路径的层级得是bin的上一级，我这边是 `F:\jdk-17` 。  

![alt text](../../images/Cordova/image-3.png)

接着打开环境变量编辑器，可以直接在搜索框搜索 `环境变量` ，点击编辑系统环境变量，在系统变量下点击新建，输入 `JAVA_HOME`，粘贴刚刚复制的路径。

![alt text](../../images/Cordova/image-4.png) 

![alt text](../../images/Cordova/image-6.png)

![alt text](../../images/Cordova/image-5.png)

![alt text](../../images/Cordova/image-7.png)

点击确认后，编辑系统变量中的 `Path` ，在尾部添加 `%JAVA_HOME%\bin`，点击确认。

![alt text](../../images/Cordova/image-8.png)

![alt text](../../images/Cordova/image-9.png)

上面的环境变量配置好后重新打开命令行输入`java --version`，如果成功输出版本号后就是安装成功了。

接下的 `gradle` 也同理，点击 [Gradle](https://gradle.org/releases/) 下载压缩包，下载后解压到任意路径，安装同样的方式复制 `bin` 上一层级的目录的路径。

![alt text](../../images/Cordova/image-11.png)

![alt text](../../images/Cordova/image-10.png)

打开环境变量编辑器，在系统环境变量处新建 `GRADLE_HOME` , 粘贴路径。并在 `Path` 处新增 `%GRADLE_HOME%\bin`，点击确认保存修改。

![alt text](../../images/Cordova/image-12.png)

![alt text](../../images/Cordova/image-13.png)

重新打开命令行，输入 `gradle -v` 查看 gradle 版本如果成功就是安装正确。

![alt text](../../images/Cordova/image-14.png)

## 安装 Android Sdk

点击下载[Android Studio](https://developer.android.com/studio?hl=zh-cn)。

![alt text](../../images/Cordova/image-15.png)

安装完成后，打开Android Studio，会显示下面的页面。

![alt text](../../images/Cordova/image-16.png)

![alt text](../../images/Cordova/image-17.png)

保证下面红框内东西都正常勾选了。

![alt text](../../images/Cordova/image-18.png)

![alt text](../../images/Cordova/image-19.png)


![alt text](../../images/Cordova/image-20.png)

点击 Apply 保存更改并安装，等待安装成功即可。


## 创建并编译项目

命令行在指定的目录下打开，也可以打开后切换路径，如果使用的是 `cmd` 需要通过 `盘符:` 再使用 `cd 路径` 切换到具体路径，如下：

![alt text](../../images/Cordova/image-21.png)

使用 `powershell` 直接使用 `cd` 就可以切换到具体路径了。

然后输入`cordova create 项目名`，这个名字可以是任何的字符，但最好别是中文，且保证完整路径中不存在中文路径，创建成功后cd切换进去，这个时候可以打开文件夹编辑 `config.xml` 文件和存入你的HTML文件了。

![alt text](../../images/Cordova/image-24.png)

打开www文件夹，删除里边的所有内容，把你html文件丢进去。

![alt text](../../images/Cordova/image-25.png)

![alt text](../../images/Cordova/image-27.png)

随后退回到上一层路径，右键编辑 `config.xml`，注意是编辑不要用浏览器打开。

![alt text](../../images/Cordova/image-28.png)

打开后的文件如下：
```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>HelloCordova</name>
    <description>Sample Apache Cordova App</description>
    <author email="dev@cordova.apache.org" href="https://cordova.apache.org">
        Apache Cordova Team
    </author>
    <content src="index.html" />
    <icon src="res/icon.png" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
</widget>
```
1. widget id是应用唯一标识符，因为安卓会在 `/android/data/` 下创建该目录所以请保证和其他应用不会重合。一般使用域名反写作为标识，如果没有域名可以参考github的部分开发者使用 `io.github.github用户名.具体的应用名`。
2. widget version是应用版本号，这个不需要解释吧。
3. name 标签里边写的是应用的显示名称。
4. description 标签里边写的应用的描述。
5. author 标签可以填写作者的信息，包括 `email` 和 `href`。（可以删除不写）
6. content src是入口文件名，如果你的文件名不叫 `index.html`，比如我上边叫example.html那我就得改成 `<content src="example.html" />`。
7. icon 标签可以设置应用图标，一般图标存在当前的项目文件夹，切勿使用网址。

编辑后，Ctrl + S 保存修改，再打开命令行，输入是刚刚修改 `config.xml` 的文件夹后，输入` cordova platform add android`。

![alt text](../../images/Cordova/image-29.png)

接着输入 `cordova build android` ，如果出现类似下文的字样，就是编译成功了。可以去提供的路径处复制apk安装包了。

```
BUILD SUCCESSFUL in 37s
50 actionable tasks: 50 executed
Built the following apk(s):
        F:\t\test\example\platforms\android\app\build\outputs\apk\debug\app-debug.apk
```