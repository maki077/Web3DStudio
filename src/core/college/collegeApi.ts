import {College, CollegeDescription, CollegePosition, Studio} from "./college";
import {Vector3} from "@babylonjs/core";

//API 数据
export const collegeMap: College[] = [
    {
        name: '北京三维学院', modelUrl: 'src/assets/model/building/building_1.glb',
        position: CollegePosition.A,
        scale: Vector3.One(),
        rotation: new Vector3(0, Math.PI, 0)
    },
    {
        name: '成都精通学院', modelUrl: 'src/assets/model/building/building_2.glb',
        position: CollegePosition.B,
        scale: Vector3.One(),
        rotation: new Vector3(0, Math.PI, 0)
    }
]

export const studio:Studio[]=[
    {
        description: "Java介于编译型语言和解释型语言之间。编译型语言如C、C++，代码是直接编译成机器码执行，但是不同的平台（x86、ARM等）CPU的指令集不同，因此，需要编译出每一种平台的对应机器码。解释型语言如Python、Ruby没有这个问题",
        logoUrl: "src/assets/img/studioLogo/JAVALogo.png",
        name: "JAVA高并发工作室"
    },
    {
        description: "Android是基于Linux系统的开源操作系统，是由Andy Rubin于2003年在美国加州创建",
        logoUrl: "src/assets/img/studioLogo/AndroidLogo.png",
        name: "Android旋律工作室"
    }
]

export const collegeDescription : CollegeDescription[]=[
    {
        name:'北京三维学院',
        position :'北京市朝阳区',
        description:`那么， 就我个人来说，北京三维学院对我的意义，不能不说非常重大。 
        总结的来说， 生活中，若北京三维学院出现了，我们就不得不考虑它出现了的事实。 
        北京三维学院的发生，到底需要如何做到，不北京三维学院的发生，又会如何产生。 
        爱尔兰曾经说过，越是无能的人，越喜欢挑剔别人的错儿。这句话把我们带到了一个新的维度去思考这个问题: 
        既然如此， 我们都知道，只要有意义，那么就必须慎重考虑。 对我个人而言，
        北京三维学院不仅仅是一个重大的事件，还可能会改变我的人生。`,
        studios:studio,
        imgUrl:'src/assets/img/buildingSnapshot/BeiJing.png'
    },
    {
        name:'成都精通学院',
        position :'四川省成都市',
        description:`就我个人来说，成都精通学院对我的意义，不能不说非常重大。 
        卡耐基在不经意间这样说过，我们若已接受最坏的，就再没有什么损失。
        这句话语虽然很短, 但令我浮想联翩. 对我个人而言，
        成都精通学院不仅仅是一个重大的事件，还可能会改变我的人生。 
        本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 
        对我个人而言，成都精通学院不仅仅是一个重大的事件，还可能会改变我的人生。 
`,
        studios:studio,
        imgUrl:'src/assets/img/buildingSnapshot/ChengDu.png'
    }
]


export async function fetchCollgeDescription(collegeName:string) {
    await setTimeout(()=>{},5000)
    const collgeDescription = collegeDescription.find((value =>
        value.name === collegeName
    ));
    return collgeDescription
}