const Footer = () => {
  return (
    <footer class="bg-white px-2 lg:py-3 shadow-sm dark:bg-gray-800 w-full">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <p class="hover:underline inline">Hosea</p>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#home" class="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
                <a href="#features" class="hover:underline me-4 md:me-6">Features</a>
            </li>
            <li>
                <a href="#pricing" class="hover:underline me-4 md:me-6">Pricing</a>
            </li>
            <li>
                <a href="#contact" class="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer