
const Loader = ({progress}: {progress:number})=> {


    return(

        <div className="fixed inset-0 flex items-center justify-center bg-black text-primary text-3xl">
            Loading... {progress}%
        </div>

    )
}

export default Loader