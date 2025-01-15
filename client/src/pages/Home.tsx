import Navbar from "../Components/Navigation/navbar";


interface Props{

}

const Home = (props: Props) => {
  return (
    <>
      <div className="">
        <div>
          <Navbar/>
        </div>
        <h1>welcome to my site</h1>
      </div>
    </>
  )
}

export default Home;