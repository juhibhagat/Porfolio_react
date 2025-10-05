function Home() {
    return (
        <div className="d-flex justify-content-between" style={{
            height:"600px"
        }}>
            <div className="border border-4">
                <div >
                <img src="bio-pic.jpg" alt="" />
                </div>
                <div>
                    <button className="btn btn-danger">Download CV <span className="bi bi-download"></span></button>
                    <button className="btn btn-danger m-4">About Us <span className="bi bi-graphs"></span></button>
                </div>
            </div>

            <div className="border border-4">
                <h1>Hii , I am juhi </h1>
                <marquee direction="left" className="text-danger fw-bold fs-4">Ui FullStack with React</marquee>

                <h6>I build exceptional digital experiences with modern web technologies.</h6>
            </div>
        </div>
    )
}

export default Home 