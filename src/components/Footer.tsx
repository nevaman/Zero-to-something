export const Footer = () => {
  return (
    <>
      <footer className="border-t border-white/10 mt-16">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-2 text-lg font-bold transition-opacity hover:opacity-80">
                <img src="https://i.ibb.co/xqvCR4WQ/zts-logo.png" alt="ZTS Logo" className="h-6 w-auto" />
                <span>ZTS_</span>
              </a>
              <p className="text-sm text-fgMuted">Build. Ship. Learn. Repeat.</p>
            </div>
            <div className="md:col-span-2 flex justify-between md:justify-end">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                <div className="space-y-3">
                  <h4 className="font-semibold">Explore</h4>
                  <a href="#manifesto" className="block text-fgMuted hover:text-fgPrimary">Manifesto</a>
                  <a href="#protocol" className="block text-fgMuted hover:text-fgPrimary">Protocol</a>
                  <a href="#ship-log" className="block text-fgMuted hover:text-fgPrimary">Ship Log</a>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Engage</h4>
                  <a href="#services" className="block text-fgMuted hover:text-fgPrimary">Services</a>
                  <a href="#team" className="block text-fgMuted hover:text-fgPrimary">Team</a>
                  <a href="#investors" className="block text-fgMuted hover:text-fgPrimary">Investors</a>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Connect</h4>
                  <a href="mailto:invest@zerotosomething.com" className="block text-fgMuted hover:text-fgPrimary">Email</a>
                  <a href="#" className="block text-fgMuted hover:text-fgPrimary">Telegram</a>
                  <a href="#" className="block text-fgMuted hover:text-fgPrimary">Privacy</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-fgMuted">
            <p>&copy; 2025 ZTS Labs. All rights reserved.</p>
            <a href="mailto:invest@zerotosomething.com" className="mt-4 sm:mt-0 rounded-full text-xs px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10">invest@zerotosomething.com</a>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[#010203]/90 backdrop-blur-sm p-4 border-t border-white/10 z-40">
        <a href="#registration" className="primary-btn w-full text-center block rounded-full px-6 py-3 font-semibold bg-[#F0F0F0] text-black hover:bg-white transition-colors">Start a Build</a>
      </div>
    </>
  )
}
