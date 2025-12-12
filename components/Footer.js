import Link from 'next/link'
import { useRouter } from 'next/router'

export default function FooterPage() {
  const router = useRouter()
  const isHomePage = router.pathname === '/'


  return (
    <footer className='w-full bg-[#0a192f] text-gray-200 py-8 sm:py-12 px-4 sm:px-6 md:px-8 border-t border-gray-700'>
      <div className='max-w-7xl mx-auto'>
        {/* Grid with responsive columns */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12'>
          
          {/* Navigation Links */}
          <div>
            <p className='font-bold text-[#B8E68C] text-base sm:text-lg mb-3 sm:mb-4'>NAVIGATION</p>
            <ul className='space-y-2 sm:space-y-3 text-sm sm:text-base'>
              <li>
                {isHomePage ? (
                  <a href='#home' className='hover:text-[#B8E68C] transition-colors'>Home</a>
                ) : (
                  <Link href='/#home' className='hover:text-[#B8E68C] transition-colors'>Home</Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a href='#about' className='hover:text-[#B8E68C] transition-colors'>About</a>
                ) : (
                  <Link href='/#about' className='hover:text-[#B8E68C] transition-colors'>About</Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a href='#features' className='hover:text-[#B8E68C] transition-colors'>Features</a>
                ) : (
                  <Link href='/#features' className='hover:text-[#B8E68C] transition-colors'>Features</Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a href='#packages' className='hover:text-[#B8E68C] transition-colors'>Packages</a>
                ) : (
                  <Link href='/#packages' className='hover:text-[#B8E68C] transition-colors'>Packages</Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a href='#faq' className='hover:text-[#B8E68C] transition-colors'>FAQs</a>
                ) : (
                  <Link href='/#faq' className='hover:text-[#B8E68C] transition-colors'>FAQs</Link>
                )}
              </li>
            </ul>
          </div>

          {/* Earning Features */}
          <div>
            <p className='font-bold text-[#B8E68C] text-base sm:text-lg mb-3 sm:mb-4'>EARN WITH US</p>
            <ul className='space-y-2 sm:space-y-3 text-sm sm:text-base'>
              <li>Walk-to-Earn</li>
              <li>Referral Rewards</li>
              <li>Level Bonuses</li>
              <li>Social Rewards</li>
              <li>Daily Tasks</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className='font-bold text-[#B8E68C] text-base sm:text-lg mb-3 sm:mb-4'>SUPPORT</p>
            <ul className='space-y-2 sm:space-y-3 text-sm sm:text-base'>
              <li>
                <a href='https://t.me/Aminoofficials?text=Hello%2C%20I%20want%20to%20Register%20on%20Animo' target='_blank' rel='noopener noreferrer' className='hover:text-[#B8E68C] transition-colors'>
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349130803772?text=Hello%2C%20I%20want%20to%20Register%20on%20Animo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B8E68C] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                {isHomePage ? (
                  <a href='#faq' className='hover:text-[#B8E68C] transition-colors'>Help Center</a>
                ) : (
                  <Link href='/#faq' className='hover:text-[#B8E68C] transition-colors'>Help Center</Link>
                )}
              </li>
              <li>
                <a href='https://bennyinokp.github.io/animoweb-privacy-policy/' target='_blank' rel='noopener noreferrer' className='hover:text-[#B8E68C] transition-colors'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <p className='font-bold text-[#B8E68C] text-base sm:text-lg mb-3 sm:mb-4'>JOIN ANIMO</p>
            <p className='mb-4 text-xs sm:text-sm leading-relaxed'>
              Start earning today! Download our app and turn your steps into cash.
            </p>
            
           
<a
// href="https://wa.me/2347039985631?text=Hello%2C%20I%20want%20to%20Register%20on%20Animo"
//   target="_blank"
//   rel="noopener noreferrer"
//   className='block text-center w-full sm:w-auto sm:min-w-[200px] py-2.5 sm:py-3 px-6 bg-[#B8E68C] text-[#0a192f] font-bold text-sm sm:text-base rounded-lg hover:bg-green-400 transition-colors cursor-pointer'
// >
//   Join Animo Platform Now
// </a>

href="https://wa.me/2347039985631?text=Hello%2C%20I%20want%20to%20Register%20on%20Animo"
  target="_blank"
  rel="noopener noreferrer"
  className='flex items-center justify-center w-full sm:inline-flex sm:w-auto sm:min-w-[200px] h-[3.2rem] sm:h-auto py-2.5 sm:py-3 px-6 bg-[#B8E68C] text-[#0a192f] font-bold text-sm sm:text-base rounded-lg hover:bg-green-400 transition-colors cursor-pointer'
>
  Join Animo Platform Now
</a>

          </div>

        </div>

        {/* Platform Disclaimer */}
        <div className='mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700'>
          
          <div className="mb-4 sm:mb-6 px-2 sm:px-4">  
            <p className="text-gray-200 text-base sm:text-lg md:text-xl sm:mb-3 text-center">
              DISCLAIMER
            </p>
            <p className="text-[#B8E68C] text-xs sm:text-sm leading-relaxed text-center max-w-4xl bt-2 mx-auto">
              This site is not affiliated with or endorsed by Moniepoint, TikTok, YouTube, Google, Facebook, or Meta.
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              Facebook is a trademark of Meta. YouTube is a trademark of Google Inc.
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              All other trademarks are the property of their respective owners.
            </p>
            <p className="text-[#B8E68C] text-xs sm:text-sm leading-relaxed text-center max-w-4xl mx-auto mt-2 px-2">
            The earnings, claims, and promises discussed in this training are personal results and results of constant practice. These results are not typical. They don't imply that you can duplicate them, you may get little or no results from it as they are all references for example purposes only. Every results vary and depends on many factors including but not limited to your background, experience, and work ethic. All business involves risk as well as effort and action. If you're not willing to accept that, please DO NOT REGISTER
          </p>
          </div>
          
          <div className='text-center space-y-2'>
            <p className='text-sm sm:text-base'>
              Built By{' '}
              <a
                href="https://wa.me/2347038284412?text=Hello%2C%20I%20am%20interested%20in%20inbuilding%20a%20website%20like%20Animo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B8E68C] transition-colors font-medium"
              >
                devBenny
              </a>
            </p>
            <p className='text-gray-400 text-xs sm:text-sm'>
              © 2025 Animo. All rights reserved. | Walk with purpose, earn with pride.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}