import { styles } from "../../styles"

const Contact = ()=>{

    return(
        <div className={`${styles.marginComponents} ${styles.marginBottom}`}>
            <div className="justify-items-center">
                <h1>Contact Me</h1>
            </div>
            <div className={`${styles.marginComponents}`}>
                <div className="flex  gap-2 w-full">
                    <div className="w-[50%]">
                        <h2>Do you want to work with me ?</h2>
                        <div className="flex gap-4">
                            <div className="h-[20vh] w-[10vw] bg-slate-100">

                            </div>
                            <div className="h-[20vh] w-[10vw] bg-slate-100">

                            </div>
                            <div className="h-[20vh] w-[10vw] bg-slate-100">

                            </div>
                        </div>
                    </div>
                    <div className="h-full w-[50%] border-2">
                        <form action="" className="flex flex-col p-4">
                            <label className="flex flex-col">
                                <span className="px-2">Your Name</span>
                                <input type="text" name="name" placeholder="What's your name?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                            <label className="flex flex-col">
                                <span className="px-2">Your Email</span>
                                <input type="email" name="email" placeholder="What's your email?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                            <label className="flex flex-col">
                                <span className="px-2">Your Message</span>
                                <textarea rows={7}  name="name" placeholder="What's your name?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact