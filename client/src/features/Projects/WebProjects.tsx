
const WebProjects = () => {

    const repeater = [1,2,3,4]

    return(
        <div className="grid grid-cols-3 gap-4">
            {
                repeater.map((value)=> (
                    <div className="h-[300px] w-[500px] bg-white">

                    </div>
                ))
            }
        </div>
    )
}

export default WebProjects;