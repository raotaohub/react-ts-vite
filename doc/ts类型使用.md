rantron QN 6.2 总结

组件封装

NoData 文件

hooks 封装

useParams - RecoveryOddNum

const [params,setParams,resetParams] = useParams({ ... });

//setParams(params 参数,cover 是否覆盖)
//resetParams (params 参数)

useBoolean - RecoverydataInfo

const [isShow,show,hide] = useBoolean(false);

ts 类型使用讲解

常用 符号、关键字、工具类型

|、&、?、!

type、interface、enum、typeof、keyof；
infer、is、extends、never

Partial、Required、Readonly、Pick、Omit、Record、Exclude、Extract、NonNullable、Parameters、ConstructorParameters、ReturnType、InstanceType、Uppercase、Lowercase、Capitalize、Uncapitalize

继承与多态

extends、泛型
多态 示例：ModalProvider

核心概念：约束和推断（extends、infer、is）

函数的入参和出参
泛型推断

扩展性

namespace、interface，示例：IRequestOptions

概念

浏览器重绘 (redraw)和重排(reflow)，重绘不会带来重新布局，并不一定伴随重排。

版本结构变化

路由嵌套，多标签 tab 都改成路由（规范：路由与组件名称保持一致）
多版本共享库
远程加载版本
