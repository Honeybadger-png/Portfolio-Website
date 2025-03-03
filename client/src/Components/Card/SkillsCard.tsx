import './SkillsCard.css';
type propsType = {
    span:string;
    title:string;
    logo:string;
}

const SkillsCard = (props:propsType): JSX.Element => {
    return (
        <>
            <div className={`h-full border-2 border-cyber-orange ${props.span}`}>
                <div className='h-full flex flex-col'>
                    <div className='border-b-2 border-cyber-orange justify-items-center '>
                        <h2>{props.title}</h2>
                    </div>
                    <div className=' h-full justify-items-center content-center'>
                        <h3>{props.logo}</h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SkillsCard