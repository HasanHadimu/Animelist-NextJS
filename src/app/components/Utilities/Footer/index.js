const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Kamu bisa isi konten footer tambahan di sini */}
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2025{' '}
          <a href="https://flowbite.com/" className="hover:underline text-blue-400">
            Beta-Balajar
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
