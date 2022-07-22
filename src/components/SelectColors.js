import { ColorConsumer } from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () =>{
    return (
        <div>
            <h2>색상을 선택</h2>
            <ColorConsumer>
            {({actions})=>(
                <div style={{display:'flex'}}>
                {
                    colors.map(c=>(
                        <div 
                        key={c}
                        style={{
                            background: c,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer'
                        }}
                        onClick={()=>actions.setColor(c)}
                        onContextMenu={e=>{
                            e.preventDefault();
                            actions.setSubcolor(c);
                        }}
                        ></div>
                    ))
                }
                </div>
            )}
            </ColorConsumer>
        </div>
    );

};

export default SelectColors;