import Image from 'next/image'

export default function Home() {
  return (
    <>
    <section className="text-gray-600 relative body-font">
   
  <div className="container mx-auto -mb-3.5 flex px-5 py-16 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Empower Your Collaborations, Share Freely, Connect Instantly.</h1>
      <p className="mb-8 leading-relaxed">Welcome to a file-sharing revolution! Experience the freedom to seamlessly exchange files and connect with peers instantly. Our platform prioritizes simplicity and security, offering a hassle-free, login-free approach to file sharing. Effortlessly collaborate on projects, share resources, and engage in real-time connections, all with robust end-to-end encryption.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Sender</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Receiver</button>
      </div>
    </div>
  </div>
  {/* <div className='min-h-36'></div> */}
  <img className="lg:w-2/6 md:w-3/6 min-w-full mb-10 lg-mt-48 object-cover object-center rounded" alt="hero" src="/p2pnetwork.png"/>
</section>
    </>
  )
}
