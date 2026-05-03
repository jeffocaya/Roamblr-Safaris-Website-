<!-- components/header.html -->
<header id="main-header" class="fixed w-full top-0 z-50 transition-all duration-300 bg-transparent">
    <div class="container-custom">
        <div class="flex justify-between items-center py-4">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2">
                <div class="w-10 h-10 bg-[#1B5E20] rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-xl">R</span>
                </div>
                <span class="text-xl font-bold text-[#1B5E20] font-['Playfair_Display']">Roamblr Safaris</span>
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8">
                <a href="index.html" class="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors">Home</a>
                <a href="about.html" class="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors">About</a>
                <a href="packages.html" class="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors">Packages</a>
                <a href="for-agents.html" class="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors">For Agents</a>
                <a href="travel-guide.html" class="text-gray-700 hover:text-[#1B5E20] font-medium transition-colors">Travel Guide</a>
                <a href="contact.html" class="btn-primary px-4 py-2">Get a Quote</a>
            </nav>
            
            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden text-gray-700 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        
        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="hidden md:hidden bg-white rounded-lg shadow-lg mt-2 py-4">
            <a href="index.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1B5E20]">Home</a>
            <a href="about.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1B5E20]">About</a>
            <a href="packages.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1B5E20]">Packages</a>
            <a href="for-agents.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1B5E20]">For Agents</a>
            <a href="travel-guide.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1B5E20]">Travel Guide</a>
            <a href="contact.html" class="block px-4 py-2 text-[#1B5E20] font-semibold">Get a Quote</a>
        </div>
    </div>
</header>
