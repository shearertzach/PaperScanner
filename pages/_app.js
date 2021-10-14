import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen w-screen'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
