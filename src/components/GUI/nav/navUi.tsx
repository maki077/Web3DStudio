import {NavUiState} from "./navUiState";
import {observer} from "mobx-react-lite";
import React from "react";
import classes from './navUi.module.css'
import {Button, Tooltip} from "antd";
import Icon, {FormOutlined} from "@ant-design/icons";

type NavUiProps = {
    uiState: NavUiState
}
export const NavUi = observer<NavUiProps>(props => {
    const uiState = props.uiState;

    return (
        <div className={`${classes.navUiArea} ${uiState.navShowing ? "" : classes.none}`}>
            {/*导航至地图*/}
            <div className={`${classes.ButtonArea} ${uiState.navToMapShowing ? "" : classes.none} `}>
                <Tooltip title={"导航至地图"}>
                    <Button icon={<Icon component={NavMapSVG} style={{fontSize: "30px"}}/>} shape={"circle"}
                            onClick={()=>uiState.navToMap()}
                            className={classes.Button}/>
                </Tooltip>
            </div>


        {/*    导航至学院*/}
            <div className={`${classes.ButtonArea} ${uiState.navToCollegeShowing ? "" : classes.none} `}>
                <Tooltip title={"导航至学院"}>
                    <Button icon={<Icon component={NavCollegeSVG} style={{fontSize: "30px"}}/>} shape={"circle"}
                            onClick={()=>uiState.navToCollege()}
                            className={classes.Button}/>
                </Tooltip>
            </div>
        </div>
    )
})


const NavMapSVG = () => (
    <svg  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="1267" width="70%" height="70%">
        <path
            d="M812.8 551.232c56-72.384 99.008-133.824 99.008-203.328 0-112.896-94.848-204.352-211.968-204.352s-211.968 91.52-211.968 204.352c0 62.4 36.864 121.984 85.056 186.368l-57.984 18.56L402.56 517.312C416.448 494.08 425.344 471.552 425.344 447.296c0-64.064-51.84-115.968-115.712-115.968-63.936 0-115.712 51.904-115.712 115.968 0 26.752 11.712 52.672 28.672 79.488L222.08 526.848 64 880.512l238.848-90.112 217.344 90.112 204.032-90.112L960 880.512 812.8 551.232zM699.904 248.64c56.832 0 102.912 44.416 102.912 99.264s-46.144 99.328-102.912 99.328c-56.896 0-102.912-44.48-102.912-99.328S643.008 248.64 699.904 248.64zM309.696 390.976c30.976 0 56.192 25.216 56.192 56.32 0 31.04-25.216 56.32-56.192 56.32-31.04 0-56.192-25.28-56.192-56.32C253.504 416.192 278.656 390.976 309.696 390.976zM720.128 736.832l-200.064 86.656-213.248-86.656-159.04 72.448 91.136-235.136 14.848-2.816c18.112 24.192 37.888 49.728 55.936 78.08C332.16 613.504 355.776 583.68 375.936 556.288L515.072 600.96l87.104-28.352c31.872 40.896 66.176 84.032 97.664 131.584 29.504-45.312 60.032-84.864 88.64-121.536l91.904 229.504L720.128 736.832z"
            p-id="1268" fill="#000000"></path>
    </svg>
)
const NavCollegeSVG=()=>(
    <svg  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="1893" width="70%" height="70%">
        <path
            d="M502.784 501.76c-22.528 0-45.056-3.584-66.56-10.752l-289.792-107.52C95.744 364.032 92.16 332.8 92.16 320c1.024-16.384 9.728-31.232 23.04-40.96 14.336-10.752 30.72-18.432 48.128-22.016L452.608 184.32c31.744-7.168 64.512-7.168 96.256 0l309.248 72.192c44.544 10.24 71.68 34.304 73.216 64 0 13.312-3.584 45.568-56.832 64l-308.736 107.52c-19.968 6.144-41.472 9.728-62.976 9.728zM140.8 322.56c0 1.536 5.12 8.704 22.528 14.848l290.304 107.52c31.744 10.24 65.536 10.24 97.28 0l308.224-106.496c18.944-6.656 24.064-13.824 24.064-15.36s-7.68-12.288-35.84-18.944L537.6 230.912c-24.064-5.632-49.152-5.632-73.728 0L175.616 303.616c-27.648 7.168-34.304 16.896-34.816 18.944z"
            p-id="1894" fill="#000000"></path>
        <path
            d="M190.464 421.376l-27.136 7.168c-17.408 3.584-33.792 11.264-48.128 22.016-13.312 9.728-21.504 24.576-23.04 40.96-0.512 12.8 3.072 44.032 54.272 62.976l289.792 107.52c41.984 14.336 87.552 14.336 129.536 1.024l308.736-107.52c53.248-18.432 57.344-50.688 56.832-64-1.536-29.696-28.672-53.248-73.216-64l-26.624-6.144-85.504 29.696 101.376 23.552c27.648 6.656 35.328 16.896 35.84 18.944 0.512 2.048-5.632 9.216-24.064 15.36l-308.224 107.52c-31.744 10.24-65.536 10.24-97.28 0l-290.304-107.52c-16.896-6.144-22.016-13.824-22.528-14.848s7.168-12.288 34.816-18.944L271.36 451.584"
            p-id="1895" fill="#000000"></path>
        <path
            d="M190.464 593.92l-27.648 6.656c-17.408 4.096-33.28 11.776-47.616 22.528-13.312 9.728-21.504 24.576-23.04 40.448-0.512 12.8 3.072 44.032 54.272 62.976l289.792 107.52c21.504 7.68 44.032 11.264 66.56 10.752 21.504 0 43.008-3.072 63.488-10.24l308.736-107.52c53.248-18.432 57.344-50.688 56.832-64-1.536-29.696-28.672-53.248-73.216-64l-26.624-6.144-85.504 29.184 101.376 23.552c27.648 6.656 35.328 16.896 35.84 18.944s-5.632 9.216-24.064 15.36L551.424 788.48c-31.744 10.24-65.536 10.24-97.28 0l-290.816-107.52c-16.896-6.144-22.016-13.824-22.528-14.848-0.512-1.024 7.168-11.776 34.816-18.432l95.232-24.576"
            p-id="1896" fill="#000000"></path>
    </svg>
)
