(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{578:function(_,v,t){"use strict";t.r(v);var l=t(12),i=Object(l.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"i-o接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-o接口"}},[_._v("#")]),_._v(" I/O接口")]),_._v(" "),t("h3",{attrs:{id:"接口的信号有哪几种-各有什么特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口的信号有哪几种-各有什么特点"}},[_._v("#")]),_._v(" 接口的信号有哪几种，各有什么特点?")]),_._v(" "),t("ol",[t("li",[_._v("开关量，只有两种状态，使用一位二进制0或1来表示开和关")]),_._v(" "),t("li",[_._v("数字量，二进制形式的数据或是已经过编码的二进制形式的数据")]),_._v(" "),t("li",[_._v("脉冲量，脉冲信号时以脉冲形式表示一种信号")]),_._v(" "),t("li",[_._v("模拟量，用模拟电压或模拟电流幅值大小表示的物理量。")])]),_._v(" "),t("h3",{attrs:{id:"什么是i-o接口-i-o接口的基本功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是i-o接口-i-o接口的基本功能"}},[_._v("#")]),_._v(" 什么是I/O接口，I/O接口的基本功能")]),_._v(" "),t("ol",[t("li",[_._v("微机I/O接口是微处理器与存储器或输入输出设备之间的协调动作的控制电路")]),_._v(" "),t("li",[_._v("I/O接口位于主机和外设之间，协助完成输入/输出过程中的数据传送和控制任务")])]),_._v(" "),t("ul",[t("li",[_._v("进行信息格式的转换，例如串行和并行的转换")]),_._v(" "),t("li",[_._v("将来自外部设备的数据信号传送给处理器，处理器对数据进行合适的加工，在通过接口传送外部设备")]),_._v(" "),t("li",[_._v("数据缓冲功能，接口电路中设置的数据寄存器，实现对输入、输出数据的缓冲和锁存解决cpu与外设工作速度不匹配的问题")]),_._v(" "),t("li",[_._v("提供联络信号")]),_._v(" "),t("li",[_._v("中断管理/DMA控制功能。")]),_._v(" "),t("li",[_._v("I/O地址译码和设备选择功能,使CPU在某一个时刻指选中一个I/O端口")]),_._v(" "),t("li",[_._v("协调时序差异")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("基本功能")])]),_._v(" "),t("ul",[t("li",[_._v("地址译码")]),_._v(" "),t("li",[_._v("数据缓冲")]),_._v(" "),t("li",[_._v("信息转换")]),_._v(" "),t("li",[_._v("提供命令译码和状态信息")]),_._v(" "),t("li",[_._v("定时和控制")])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("基本包含哪些电路")])]),_._v(" "),t("ul",[t("li",[_._v("数据缓冲器，锁存器")]),_._v(" "),t("li",[_._v("控制命令和状态寄存器")]),_._v(" "),t("li",[_._v("地址译码器")]),_._v(" "),t("li",[_._v("读写控制")]),_._v(" "),t("li",[_._v("中断控制")])]),_._v(" "),t("h3",{attrs:{id:"为啥要设置接口电路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为啥要设置接口电路"}},[_._v("#")]),_._v(" 为啥要设置接口电路")]),_._v(" "),t("ol",[t("li",[_._v("CPU和外设之间速度不匹配,CPU的速度快，外设的速度慢")]),_._v(" "),t("li",[_._v("CPU与外设两者的信号格式不匹配,需要进行信息格式的转换")]),_._v(" "),t("li",[_._v("CPU与外设的时序不匹配，每个I/O设备都有自己的定时控制电路，以自己的速度传输数据，无法与CPU的时序取得统一")]),_._v(" "),t("li",[_._v("如何外设直接由CPU控制，会使外设的硬件结构依赖于CPU，对外设的发展不利,同时降低CPU的效率")])]),_._v(" "),t("h3",{attrs:{id:"主存储器不需要接口顶啊花和系统总线的连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主存储器不需要接口顶啊花和系统总线的连接"}},[_._v("#")]),_._v(" 主存储器不需要接口顶啊花和系统总线的连接")]),_._v(" "),t("p",[_._v("因为主存器功能单一，且速度与CPU相当，因此可直接连接在CPU的系统总线上")]),_._v(" "),t("h3",{attrs:{id:"什么是端口-端口的基本功能-通常有哪几类端口-接口中会有哪些寄存器就是端口有哪几类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是端口-端口的基本功能-通常有哪几类端口-接口中会有哪些寄存器就是端口有哪几类"}},[_._v("#")]),_._v(" 什么是端口，端口的基本功能，通常有哪几类端口？接口中会有哪些寄存器就是端口有哪几类?")]),_._v(" "),t("p",[_._v("电路中用于缓存数据及控制信息的部件，接口电路中存取信息的存储器叫做端口，接口包含端口")]),_._v(" "),t("ol",[t("li",[_._v("数据端口")]),_._v(" "),t("li",[_._v("状态端口")]),_._v(" "),t("li",[_._v("控制端口")])]),_._v(" "),t("ul",[t("li",[_._v("信息的形式变换")]),_._v(" "),t("li",[_._v("锁存以及缓冲")]),_._v(" "),t("li",[_._v("信息的输入输出")]),_._v(" "),t("li",[_._v("I/O地址译码与设备选择")])]),_._v(" "),t("h3",{attrs:{id:"端口与接口的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端口与接口的关系"}},[_._v("#")]),_._v(" 端口与接口的关系")]),_._v(" "),t("ol",[t("li",[_._v("I/O接口位于主机和外设之间，协助完成输入/输出过程中的数据传送和控制任务")]),_._v(" "),t("li",[_._v("I/O接口通过系统连接主机和外设。")]),_._v(" "),t("li",[_._v("I/O端口是接口电路中用于缓存数据及控制信息的部件")]),_._v(" "),t("li",[_._v("一个接口电路中有多个端口")])]),_._v(" "),t("h3",{attrs:{id:"两种i-o接口结构独立编制和统一编制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种i-o接口结构独立编制和统一编制"}},[_._v("#")]),_._v(" 两种I/O接口结构独立编制和统一编制")]),_._v(" "),t("ol",[t("li",[_._v("独立编制（标准的I/O）")])]),_._v(" "),t("ul",[t("li",[_._v("I/O设备的地址空间和存储器地址空间是独立的、分开的、即I/O接口地址不占用存储器的地址空间。")]),_._v(" "),t("li",[_._v("微处理器对I/O设备的管理是利用专用的IN（输入）和OUT（输出）指令来实现数据传递的")]),_._v(" "),t("li",[_._v("微处理器对I/O设备的读写控制是用I/O读写控制信号(IOR,IOW)")]),_._v(" "),t("li",[_._v("译码电路简单")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("统一编制（存储器映像I/O）")])]),_._v(" "),t("ul",[t("li",[_._v("I/O接口与存储器共用同一个地址空间(此时存储器于I/O设备之间的唯一区别所占用的地址不同)")]),_._v(" "),t("li",[_._v("微处理器对I/O设备的管理是利用对存储器的存储单元进行操作的指令来实现")]),_._v(" "),t("li",[_._v("微处理器对I/O设备的读写控制是用存储器读写控制信号(MEMW,MEMR)")])]),_._v(" "),t("h2",{attrs:{id:"常用数字接口电路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用数字接口电路"}},[_._v("#")]),_._v(" 常用数字接口电路")]),_._v(" "),t("h3",{attrs:{id:"并行数据传送-串行数据传送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并行数据传送-串行数据传送"}},[_._v("#")]),_._v(" 并行数据传送，串行数据传送")]),_._v(" "),t("ol",[t("li",[_._v("并行数据传送")])]),_._v(" "),t("ul",[t("li",[_._v("在微机系统内部")]),_._v(" "),t("li",[_._v("速度快")]),_._v(" "),t("li",[_._v("电路多")]),_._v(" "),t("li",[_._v("一般用于较短距离的数据传送")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("串行数据传送")])]),_._v(" "),t("ul",[t("li",[_._v("将构成字符的每个二进制数据位，按一定的顺序逐位进行传送的方式")]),_._v(" "),t("li",[_._v("主要用于远程终端")]),_._v(" "),t("li",[_._v("远距离数据传送采用串行方式比较经济")]),_._v(" "),t("li",[_._v("但串行数据传送比并行数据传送控制复杂")]),_._v(" "),t("li",[_._v("接受设备和发送设备必须保持相同的传送波特率")])]),_._v(" "),t("h3",{attrs:{id:"比较串行通信与并行通信的优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#比较串行通信与并行通信的优缺点"}},[_._v("#")]),_._v(" 比较串行通信与并行通信的优缺点")]),_._v(" "),t("ol",[t("li",[_._v("从传送距离上看：")])]),_._v(" "),t("ul",[t("li",[_._v("并行通信适宜于近距离的数据传送，通常小于 30 米；")]),_._v(" "),t("li",[_._v("而串行通信适宜于远距离的数据传送可以从几米到数千公里")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("从传送速度上看：并行通信传送数据的速度比串行通信快得 多；")]),_._v(" "),t("li",[_._v("从传送设备和费用上：在远距离传送中通信线路的费用占很大的比重，因而串行\n通信的费用由于传送线少而比并行通信的费用低得多。")])]),_._v(" "),t("h3",{attrs:{id:"_8255是并行i-o接口芯片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8255是并行i-o接口芯片"}},[_._v("#")]),_._v(" 8255是并行I/O接口芯片")]),_._v(" "),t("ol",[t("li",[_._v("端口A，端口B，端口C，控制口")]),_._v(" "),t("li",[_._v("A口控制C口的高四位")]),_._v(" "),t("li",[_._v("B口控制C口的低四位")]),_._v(" "),t("li",[_._v("三种工作方式")])]),_._v(" "),t("ul",[t("li",[_._v("方式0 基本收入输出 ABC")]),_._v(" "),t("li",[_._v("方式1 选通输入输出 AB")]),_._v(" "),t("li",[_._v("方式2 双向传送 A")])]),_._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[_._v("方式选择控制字\n"),t("img",{attrs:{src:"/img/8255-mode-selection.png",alt:"方式选择控制字"}})]),_._v(" "),t("li",[_._v("置为复位控制字\n"),t("img",{attrs:{src:"/img/8255-set-reset.png",alt:"置为复位控制字"}})]),_._v(" "),t("li",[_._v("PA、PB位于输出方式时，若PA口允许中断，则置PC6=1,若PB口允许中断，则置PC2=1")]),_._v(" "),t("li",[_._v("PA、PB位于输入方式时，若PA口允许中断，则置PC4=1,若PB口允许中断，则置PC2=1")])]),_._v(" "),t("h3",{attrs:{id:"_8255a的方式0一般使用在什么场合-在方式0时-如果要使用查询方式进行输入输出-应该如何处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8255a的方式0一般使用在什么场合-在方式0时-如果要使用查询方式进行输入输出-应该如何处理"}},[_._v("#")]),_._v(" 8255A的方式0一般使用在什么场合？在方式0时，如果要使用查询方式进行输入输出，应该如何处理")]),_._v(" "),t("ol",[t("li",[_._v("方式0的使用场合分为有两种，一种是同步传送，另一种是查询式传送")]),_._v(" "),t("li",[_._v("在方式0的情况下，没有规定固定的应答信号，所有，这时，将端口A和端口B作为数据端口，把端口C的4个数位规定位输出口，用来输入一些控制信号，而把另外4个数位规定为输入口，用来读入外设的状态，即利用端口C来配合端口A和端口B的输入输出操作")]),_._v(" "),t("li",[_._v("使用查询查询方式进行输入输出时，可利用端口C的某一种作为查询，只有当该位数为1时，方可以将数据送到输入或输入端口去。")])]),_._v(" "),t("h3",{attrs:{id:"_8255a三种工作方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8255a三种工作方式"}},[_._v("#")]),_._v(" 8255A三种工作方式")]),_._v(" "),t("ol",[t("li",[_._v("方式0适用于工作在同步方式和查询试方式传送")]),_._v(" "),t("li",[_._v("方式1适用于外设在能提供选通信号或数据接受信号的场合，且采用中断传送方式比较方便")]),_._v(" "),t("li",[_._v("方式2适用于一个并行外设既可以作为输出设备，又可以作为输入设备，并且输入和输出不会同时进行的场合")])]),_._v(" "),t("h3",{attrs:{id:"_8253计数器-定时器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8253计数器-定时器"}},[_._v("#")]),_._v(" 8253计数器/定时器")]),_._v(" "),t("ol",[t("li",[_._v("8253 具有3个独立的功能完全相同的 16 位计数器，每个计数器都有6种工作方式")]),_._v(" "),t("li",[_._v("工作方式")])]),_._v(" "),t("ul",[t("li",[_._v("方式0-计数结束中断")]),_._v(" "),t("li",[_._v("方式1-可重复触发的单稳态触发器   等待GATE(门控信号)  上升沿")]),_._v(" "),t("li",[_._v("方式2-频率发生器（周期） 负脉冲")]),_._v(" "),t("li",[_._v("方式3-方波发生器（周期） 计算过程中输出有一半时间是高电平，一半时间是低电平")]),_._v(" "),t("li",[_._v("方式4-软件触发选通   负脉冲")]),_._v(" "),t("li",[_._v("方式5-硬件触发选通   负脉冲  等待GATE(门控信号)  上升沿")])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("init\n"),t("img",{attrs:{src:"/img/8253-init.png",alt:"置为复位控制字"}})])]),_._v(" "),t("h3",{attrs:{id:"说明8253各个计数通道中三个引脚号clk、out和gate的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明8253各个计数通道中三个引脚号clk、out和gate的功能"}},[_._v("#")]),_._v(" 说明8253各个计数通道中三个引脚号CLK、OUT和GATE的功能")]),_._v(" "),t("ol",[t("li",[_._v("每个通道都有三根引脚线与外界联系。")]),_._v(" "),t("li",[_._v("CLK 为 外部输入计数脉冲")]),_._v(" "),t("li",[_._v("引脚 GATE 为控制计数器工作的门控输入信号，根据工作方式的不同分为高电平\n触发计数和正脉冲触发计数。")]),_._v(" "),t("li",[_._v("引脚 OUT 为计数结束输出信号， 在不同的工作方式下，可以输出不\n同形式的波型")])])])}),[],!1,null,null,null);v.default=i.exports}}]);