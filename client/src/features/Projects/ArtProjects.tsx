

const ArtProjects = () => {

    const repeater = [1,2,3,4,5 ]
    return(
        <div className="grid grid-cols-4 mt-10 gap-4">
            {
                repeater.map((value)=> (
                    <div className="h-[200px] w-[350px] bg-white">

                    </div>
                ))
            }
        </div>
    )
}

export default ArtProjects;