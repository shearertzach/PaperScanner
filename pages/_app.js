import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen w-screen bg-gray-200'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
