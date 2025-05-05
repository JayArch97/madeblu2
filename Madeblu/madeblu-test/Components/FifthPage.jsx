import faciologo from '../src/assets/facio.png'

export default function FifthPage(){
    return (
        <>
            <div className="w-full h-screen bg-black flex items-center justify-center">
                <div className="container mx-auto text-center justify-center">
                    <div className='flex items-center justify-center mb-8'>
                    <img src={faciologo} alt='' className='h-80 w-80'/>
                    </div>
                    <h1 className="text-white text-4xl mb-4">FACIO</h1>
                    <p className="text-gray-600 text-lg ">FACIO is a facial recognition app which
                    <br /> detects person from your social network,<br/> media files or internet.
                    </p>
                    <button className="text-white text-2xl mt-20 rounded-lg px-2 py-2 border-2 bg-green-300 border-green-300 shadow-[0px_0px_5px_5px_rgba(46,255,119,1)]"> Get Started</button>
                </div>
            </div>
        </>
    )
}
