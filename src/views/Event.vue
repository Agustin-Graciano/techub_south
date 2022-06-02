<template>
  <div>
    <div class="max-w-[1500px] mx-auto">
		<div class="md:h-[500px] lg:h-[540px] xl:h-[600px] relative">
		<div class="w-full md:h-[420px] lg:h-[420px] bg-no-repeat header-bg-img">
			<div class="md:flex justify-between items-center px-4 md:px-6 md:py-2">
				<div class="flex items-center md:justify-start justify-between py-2 md:py-0">
					<router-link to="#">
					<img src="./Techhub-main-logo.png" alt="" class="w-16 md:w-24">
					</router-link>	
					<router-link to href="https://www.linkedin.com/company/techhub-syd/?fbclid=IwAR05HV_Q99B_hhls9CR51jLwHSrdl8WeHexv_ZwNCQIHgDqEFqS9hx5P_B8" target="_blank" class="btn hidden md:block">
					<img src="./linkedin.png" class="w-8 ml-2 hover:opacity-90" alt="">
					</router-link>	
					<router-link to="#" class="hidden md:block">
					<img src="./facebook.png" class="w-8 ml-2 hover:opacity-90" alt="">
					</router-link>
					<router-link to="#" class="hidden md:block">
					<img src="./third-icon.png" class="w-8 ml-2 hover:opacity-90" alt="">
					</router-link>
					<a href="#newsletter" class="blcok md:hidden uppercase fontlight px-1 pt-1 pb-1 rounded-lg h-auto  text-[10px] hover:opacity-95 text-[#324857] ml-4 bg-white">
						newsletter
					</a>
				</div>
				<div class="flex items-center md:justify-start justify-between">
					<router-link to="/" class="uppercase fontlight text-shadow-xl md:text-[11px] text-[8px] hover:text-opacity-90 font-semibold text-white ml-0 md:ml-6 tracking-[1px]">
						home
					</router-link>
					<router-link to="/about" class="uppercase fontlight text-shadow-xl md:text-[11px] text-[8px] hover:text-opacity-90 font-semibold text-white ml-0 md:ml-6 tracking-[1px]">
						about us
					</router-link>
					<router-link to="/whatwedo" class="uppercase fontlight text-shadow-xl md:text-[11px] text-[8px] hover:text-opacity-90 font-semibold text-white ml-0 md:ml-6 tracking-[1px]">
						what we do
					</router-link>
					<router-link to="/startup" class="uppercase fontlight text-shadow-xl md:text-[11px] text-[8px] hover:text-opacity-90 font-semibold text-white ml-0 md:ml-6 tracking-[1px]">
						for startups
					</router-link>
					<router-link to="/event" class="uppercase fontlight text-shadow-xl md:text-[11px] text-[8px] hover:text-opacity-90 font-semibold text-white ml-0 md:ml-6 tracking-[1px]">
						events
					</router-link>
					<router-link to="/contact" class="uppercase fontlight text-shadow-xl md:text-[11px] text-[8px] hover:text-opacity-90 font-semibold text-white ml-0 md:ml-6 tracking-[1px]">
						contact
					</router-link>
					<a href="#newsletter" class="hidden md:block uppercase fontlight px-1 pt-1 pb-1 rounded-lg h-auto from-[#55B57A] to-[#94C4A7] text-[10px] hover:opacity-95 text-white ml-6 bg-gradient-to-b">
						newsletter
					</a>
				</div>
			</div>
			<div class="mt-12 ml-4 md:ml-32 pb-6 md:pb-0">
				<h1 class="hidden md:block fontlight text-5xl text-white font-medium text-shadow-xl">
					We support <b class="text-white">tech startups, <br> students</b> and <b class="text-white">investors</b> to <br> grow the tech eco-system. 
				</h1>
				<h1 class="block md:hidden fontlight text-xl w-[80%] text-white font-medium text-shadow-xl">
					We support <b class="text-white">tech startups, students</b> and <b class="text-white">investors</b> to grow the tech eco-system. 
				</h1>
			</div>

		</div>
		<div class="md:w-[45%] lg:w-[40%] md:absolute md:right-10 md:bottom-0 mt-4 md:mt-0">
			<img src="./green-logo.png" class="w-36 md:w-52 mx-auto " alt="">
			<p class="text-[#525252] fontextralight text-xs font-semibold mt-2 md:px-0 px-3">“We are a community of tech developers, help us to grow the
			tech environment in the Southwest area of Denmark, it´s open for students, tech startups and investors”
			</p>
		</div>

		</div>
		<div class="mt-12 md:mt-16">
			<img src="./right-round.png" class="hidden md:block h-72 -mt-48 absolute right-0 w-12" alt="">
            <div class="md:max-w-[82%] md:mx-auto px-3 md:px-0">
                
                <img src="./left-round.png" class="absolute left-0 w-16 mt-80 hidden md:block" alt="">
                <h2 class="text-xl md:text-2xl tracking-[5px] uppercase mt-8">
                    <span class="text-[#55B57A] font-extrabold fontlight"><b>upcoming </b></span>
                    <span class="text-[#324857] font-semibold fontextralight">events</span>
                </h2>
                <div class="md:grid md:grid-cols-2 md:mt-8 mt-0 md:gap-16 md:mx-12">
                    <div class="mt-8 md:mt-0 md:mr-10" v-for="(event, key) in events" :key="key">
                        <img src="./event.png" class="w-full rounded-lg" alt="">
                        <h3 class="text-xs mt-4 md:mt-3 text-[#525252] fontlight">
                            <span class="text-[#D0D0D0]">By</span> {{ event.author }}
                        </h3>
                        <h3 class="text-base mt-2 md:mt-3 text-black fontregular font-semibold">
                            {{ event.description }}
                        </h3>
                        <div class="flex items-center mt-4">
                            <div class="w-[14px]">
                                <svg id="Group_969" data-name="Group 969" xmlns="http://www.w3.org/2000/svg" width="17.965" height="17.965" viewBox="0 0 17.965 17.965">
                                    <g id="Group_968" data-name="Group 968">
                                        <circle id="Ellipse_223" data-name="Ellipse 223" cx="0.793" cy="0.793" r="0.793" transform="translate(12.998 6.341)" fill="#adadad"/>
                                        <circle id="Ellipse_236" data-name="Ellipse 236" cx="0.793" cy="0.793" r="0.793" transform="translate(12.998 9.511)" fill="#adadad"/>
                                        <circle id="Ellipse_237" data-name="Ellipse 237" cx="0.793" cy="0.793" r="0.793" transform="translate(12.998 12.681)" fill="#adadad"/>
                                        <circle id="Ellipse_224" data-name="Ellipse 224" cx="0.793" cy="0.793" r="0.793" transform="translate(9.828 6.341)" fill="#adadad"/>
                                        <circle id="Ellipse_234" data-name="Ellipse 234" cx="0.793" cy="0.793" r="0.793" transform="translate(9.828 9.511)" fill="#adadad"/>
                                        <circle id="Ellipse_235" data-name="Ellipse 235" cx="0.793" cy="0.793" r="0.793" transform="translate(9.828 12.681)" fill="#adadad"/>
                                        <path id="Path_3483" data-name="Path 3483" d="M17.263,12.351a.7.7,0,0,0,.7-.7V4.211A2.81,2.81,0,0,0,15.158,1.4h-.912V.7a.7.7,0,1,0-1.4,0v.7H9.649V.7a.7.7,0,1,0-1.4,0v.7H5.088V.7a.7.7,0,0,0-1.4,0v.7H2.807A2.81,2.81,0,0,0,0,4.211V15.158a2.81,2.81,0,0,0,2.807,2.807H15.158a2.81,2.81,0,0,0,2.807-2.807.7.7,0,0,0-1.4,0,1.405,1.405,0,0,1-1.4,1.4H2.807a1.405,1.405,0,0,1-1.4-1.4V4.211a1.405,1.405,0,0,1,1.4-1.4h.877v.7a.7.7,0,1,0,1.4,0v-.7H8.246v.7a.7.7,0,1,0,1.4,0v-.7h3.193v.7a.7.7,0,1,0,1.4,0v-.7h.912a1.405,1.405,0,0,1,1.4,1.4v7.439A.7.7,0,0,0,17.263,12.351Z" fill="#adadad"/>
                                        <circle id="Ellipse_226" data-name="Ellipse 226" cx="0.793" cy="0.793" r="0.793" transform="translate(3.487 6.341)" fill="#adadad"/>
                                        <circle id="Ellipse_230" data-name="Ellipse 230" cx="0.793" cy="0.793" r="0.793" transform="translate(3.487 9.511)" fill="#adadad"/>
                                        <circle id="Ellipse_231" data-name="Ellipse 231" cx="0.793" cy="0.793" r="0.793" transform="translate(3.487 12.681)" fill="#adadad"/>
                                        <circle id="Ellipse_229" data-name="Ellipse 229" cx="0.793" cy="0.793" r="0.793" transform="translate(6.658 6.341)" fill="#adadad"/>
                                        <circle id="Ellipse_232" data-name="Ellipse 232" cx="0.793" cy="0.793" r="0.793" transform="translate(6.658 9.511)" fill="#adadad"/>
                                        <circle id="Ellipse_233" data-name="Ellipse 233" cx="0.793" cy="0.793" r="0.793" transform="translate(6.658 12.681)" fill="#adadad"/>
                                    </g>
                                    </svg>
                                    
                            </div>
                            <div class=" pl-4">
                                <h3 class="text-[11px] text-[#525252] fontlight">Date</h3>
                                <h3 class="text-xs text-[#525252] fontlight mt-1">{{ event.date }}</h3>
                            </div>
                        </div>
                        <div class="flex items-center mt-3">
                            <div class="w-[14px]">
                                <svg id="place_1_" data-name="place (1)" xmlns="http://www.w3.org/2000/svg" width="14.534" height="17.965" viewBox="0 0 14.534 17.965">
                                    <g id="Group_17425" data-name="Group 17425">
                                      <g id="Group_17424" data-name="Group 17424">
                                        <path id="Path_19509" data-name="Path 19509" d="M62.116,3.124a7.254,7.254,0,0,0-11.926,0,7.255,7.255,0,0,0-.845,6.684A5.713,5.713,0,0,0,50.4,11.546l5.276,6.2a.628.628,0,0,0,.956,0l5.275-6.2a5.719,5.719,0,0,0,1.053-1.736A7.256,7.256,0,0,0,62.116,3.124Zm-.333,6.248a4.481,4.481,0,0,1-.829,1.357l0,0-4.8,5.636-4.8-5.639a4.484,4.484,0,0,1-.83-1.361,6,6,0,0,1,.7-5.53,6,6,0,0,1,9.859,0A6,6,0,0,1,61.783,9.372Z" transform="translate(-48.886)" fill="#adadad"/>
                                      </g>
                                    </g>
                                    <g id="Group_17427" data-name="Group 17427" transform="translate(3.75 3.727)">
                                      <g id="Group_17426" data-name="Group 17426">
                                        <path id="Path_19510" data-name="Path 19510" d="M159.272,106.219a3.518,3.518,0,1,0,3.518,3.518A3.522,3.522,0,0,0,159.272,106.219Zm0,5.779a2.261,2.261,0,1,1,2.261-2.261A2.264,2.264,0,0,1,159.272,112Z" transform="translate(-155.754 -106.219)" fill="#adadad"/>
                                      </g>
                                    </g>
                                  </svg>                                  
                            </div>
                            <div class=" pl-4">
                                <h3 class="text-[11px] text-[#525252] fontlight">Location</h3>
                                <h3 class="text-xs text-[#525252] fontlight mt-1">{{ event.location }}</h3>
                            </div>
                        </div>
                        <p class="text-xs mt-3 md:mt-5 mr-[10%] text-[#7A839E] fontlight">
                            {{ event.subDescription }}
                        </p>
                        <div class="mt-3 md:mt-6 flex justify-center mr-[10%]">
                        <router-link to="#" class="text-sm text-[#55B57A] fontlight text-center border-b border-[#55B57A]">Sign up</router-link>
                        </div>
                    </div>
                </div>

                <img src="./right-round.png" class="hidden md:block h-96 -mt-80 absolute right-0 w-24" alt="">
                
</div>
<div class="md:max-w-[1000px] md:mx-auto px-3 md:px-0">
    <h2 class="text-xl md:text-2xl tracking-[5px] text-left md:text-right uppercase mt-16 mb-8 md:mb-12">
        <span class="text-[#55B57A] font-extrabold fontlight"><b>event </b></span>
        <span class="text-[#324857] font-semibold fontextralight">calendar</span>
    </h2>
    <div class="relative grid grid-cols-1 gap-x-4 md:grid-cols-2 rounded-xl shadow-lg py-2 px-4 lg:mx-0 md:mx-6">
      
      <section class="text-center">
          <div class="flex justify-between px-4">
            <button type="button" class="after:first:flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Previous month</span>
                
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
              <h2 class="fontregular text-xl text-gray-900">april 2022</h2>
              <button type="button" class="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Next month</span>
                
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
          </div>
        <div class="mt-6 grid grid-cols-7 leading-6 fontlight text-sm text-gray-500">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div class="isolate mt-2 grid grid-cols-7 rounded-lg bg-gray-200 text-base fontlight">
          
          <button type="button" class="relative rounded-tl-lg bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
          
            <time datetime="2021-12-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2021-12-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2021-12-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2021-12-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2021-12-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
          </button>
          <button type="button" class="relative rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-07" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">7</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-08" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">8</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">9</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">10</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-11" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">11</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-12" class="mx-auto flex h-10 w-10 items-center justify-center rounded-full to-[#55B57A] from-[#94C4A7] text-[10px] bg-gradient-to-r font-semibold text-white">12</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-13" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">13</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-14" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">14</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-15" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">15</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-16" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">16</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-17" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">17</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-18" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">18</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-19" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">19</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-20" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">20</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-21" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">21</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-22" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">22</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-23" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">23</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-24" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">24</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-25" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">25</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-26" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">26</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
          </button>
          <button type="button" class="relative rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
          </button>
          <button type="button" class="relative rounded-br-lg bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
          </button>
        </div>
      </section>
      <section class="hidden text-center md:block">
        <div class="flex justify-between px-4">
            <button type="button" class="after:first:flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Previous month</span>
                
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
              <h2 class="fontregular text-xl text-gray-900">May 2022</h2>
              <button type="button" class="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Next month</span>
            
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
          </div>
          <div class="mt-6 grid grid-cols-7 leading-6 fontlight text-sm text-gray-500">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>
        <div class="isolate mt-2 grid grid-cols-7 rounded-lg bg-gray-200 text-sm fontlight">
          <button type="button" class="relative rounded-tl-lg bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-01-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
          </button>
          <button type="button" class="relative rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-07" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">7</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-08" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">8</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">9</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">10</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-11" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">11</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-12" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">12</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-13" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">13</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-14" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">14</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-15" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">15</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-16" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">16</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-17" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">17</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-18" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">18</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-19" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">19</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-20" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">20</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-21" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">21</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-22" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">22</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-23" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">23</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-24" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">24</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-25" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">25</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-26" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">26</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
          </button>
          <button type="button" class="relative bg-white py-1.5 text-gray-900 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-02-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
          </button>
          <button type="button" class="relative rounded-bl-lg bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-07" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">7</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-08" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">8</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">9</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">10</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-11" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">11</time>
          </button>
          <button type="button" class="relative bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-12" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">12</time>
          </button>
          <button type="button" class="relative rounded-br-lg bg-slate-50 py-1.5 text-gray-400 hover:bg-slate-100 focus:z-10">
            <time datetime="2022-03-13" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">13</time>
          </button>
        </div>
      </section>
    </div>
    <div class="flex justify-end md:mx-6 lg:mx-0 mt-4">
        <button class="text-[#9CA7B2] border-2 border-[#9CA7B2] rounded-full py-[6px] hover:opacity-80 fontlight px-10">Search</button>
    </div>
  </div>
  





  <img src="./left-round.png" class="absolute left-0 h-96 w-20 hidden md:block mt-36" alt="">












                
                <div class="mt-10 md:mt-16 px-3 md:px-0">
                    <img src="./green-logo.png" class="w-48 md:w-72 mx-auto" alt="">
                    <p class="text-[#525252] fontregular text-xl md:text-2xl mt-6 md:mt-10 md:w-[500px] mx-auto">
                        Did you attend one of our events? Then we would love to hear your feedback!
                    </p>
                    <div class="flex justify-center mt-4">
                      <router-link to href="https://www.linkedin.com/company/techhub-syd/?fbclid=IwAR05HV_Q99B_hhls9CR51jLwHSrdl8WeHexv_ZwNCQIHgDqEFqS9hx5P_B8" target="_blank" class="btn rounded-lg from-[#55B57A] to-[#94C4A7] text-[10px] flex justify-center items-center hover:opacity-90 mx-6 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-b">
                        <img src="./linkedin.png" class="h-8 md:h-12 w-8 md:w-12" alt="">
                      </router-link>
                      <router-link to="#" class="rounded-lg from-[#55B57A] to-[#94C4A7] text-[10px] flex justify-center items-center hover:opacity-90 mx-6 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-b">
                        <img src="./facebook.png" class="h-8 md:h-12 w-8 md:w-12" alt="">
                      </router-link>
                      <router-link to="#" class="rounded-lg from-[#55B57A] to-[#94C4A7] text-[10px] flex justify-center items-center hover:opacity-90 mx-6 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-b">
                        <img src="./third-icon.png" class="h-8 md:h-12 w-8 md:w-12" alt="">
                      </router-link>
                    </div>
                  </div>
                  <div class="flex md:justify-end justify-center mt-20 md:pr-[6%]">
                    <h2 class="text-base md:text-xl tracking-[4px] md:tracking-[6px] uppercase text-center md:text-left md:pl-[9%]">
                        <span class="text-[#55B57A] font-extrabold fontlight"><b>recap </b></span>
                        <span class="text-[#324857] font-semibold fontextralight">of last events</span>
                    </h2>
                    </div>
                    <div class="flex mt-4">
					<div class="w-[8%] flex justify-end items-center pr-2">
						<svg xmlns="http://www.w3.org/2000/svg" @click="prev" xmlns:xlink="http://www.w3.org/1999/xlink" class="cursor-pointer w-10" viewBox="0 0 50 49">
							<defs>
								<filter id="Path_19515" x="0" y="0" width="50" height="49" filterUnits="userSpaceOnUse">
									<feOffset dy="3" input="SourceAlpha"/>
									<feGaussianBlur stdDeviation="3" result="blur"/>
									<feFlood flood-color="#324857" flood-opacity="0.502"/>
									<feComposite operator="in" in2="blur"/>
									<feComposite in="SourceGraphic"/>
								</filter>
							</defs>
							<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_19515)">
								<g id="Path_19515-2" data-name="Path 19515" transform="translate(9 37) rotate(-90)" fill="#324857">
									<path d="M 30.20224952697754 31.5 L 0.797752857208252 31.5 L 6.769031047821045 19.17219924926758 L 15.50000095367432 1.146971583366394 L 30.20224952697754 31.5 Z" stroke="none"/>
									<path d="M 15.50000095367432 2.293952941894531 L 1.595510482788086 31 L 29.40449142456055 31 L 15.50000095367432 2.293952941894531 M 15.50000095367432 0 L 31 32 L 1.9073486328125e-06 32 L 15.50000095367432 0 Z" stroke="none" fill="#324857"/>
								</g>
							</g>
						</svg>
						
					</div>
					<div class="w-[84%] relative" id="slider">
						<div v-for="(item, key) in lastEvent" :key="key" v-show="item.id == currentEvent" :id="item.id" >
							<div class="w-full absolute from-white/5 to-white/95 bg-gradient-to-b drop-shadow-md rounded-lg top-0 right-0 left-0 bottom-0 z-50"></div>
							<img :src="item.image" class="w-full md:h-96 h-40 rounded-lg" alt="">		
						</div>
					</div>
					<div class="w-[8%] flex justify-start items-center pl-2">
						<svg xmlns="http://www.w3.org/2000/svg" @click="next" xmlns:xlink="http://www.w3.org/1999/xlink" class="cursor-pointer w-10" viewBox="0 0 50 49">
							<defs>
								<filter id="Polygon_3" x="0" y="0" width="50" height="49" filterUnits="userSpaceOnUse">
									<feOffset dy="3" input="SourceAlpha"/>
									<feGaussianBlur stdDeviation="3" result="blur"/>
									<feFlood flood-color="#324857" flood-opacity="0.502"/>
									<feComposite operator="in" in2="blur"/>
									<feComposite in="SourceGraphic"/>
								</filter>
							</defs>
							<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Polygon_3)">
								<g id="Polygon_3-2" data-name="Polygon 3" transform="translate(41 6) rotate(90)" fill="#324857">
									<path d="M 30.20224952697754 31.5 L 0.797752857208252 31.5 L 15.50000095367432 1.146971583366394 L 30.20224952697754 31.5 Z" stroke="none"/>
									<path d="M 15.50000095367432 2.293952941894531 L 1.595510482788086 31 L 29.40449142456055 31 L 15.50000095367432 2.293952941894531 M 15.50000095367432 0 L 31 32 L 1.9073486328125e-06 32 L 15.50000095367432 0 Z" stroke="none" fill="#324857"/>
								</g>
							</g>
						</svg>
						
					</div>
				</div>
		</div>
		<div class="mt-20">
				<div class="mt-12">
					<img src="./Group111.png" class="w-full" alt="">
				</div>

				<div class="mt-12 md:max-w-[84%] md:mx-auto px-3 md:px-0" id="contactus">
					<div class="md:w-[54%] pb-12">
						<span class="hidden md:block text-[#525252] fontregular w-auto text-2xl leading-[18px]">
							Subscribe to our newsletter
						</span>
						<div class="hidden md:block mt-4">
						<span class="text-[#525252] fontregular w-auto text-2xl leading-[18px]">
							To get info about latest events and greatest starups
						</span>
						</div>
						<div class="hidden md:block mt-4">
						<span class="text-[#55B57A] fontregular w-auto text-2xl leading-[18px]">
							Join Us
						</span>
						</div>
						<p class="md:hidden block text-[#525252] fontregular w-auto text-xl">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <span class="text-[#55B57A]">euismod</span>
						</p>
						<form action="https://gmail.us13.list-manage.com/subscribe/post?u=5df024671490b38dce17dddd3&amp;id=fb06cc83f7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate mt-8 md:mr-12" target="_blank" novalidate>
  
							<label class="text-xl md:text-2xl text-black fontregular font-semibold">Full Name</label>
							<input placeholder="ex. John Doe" type="text" value="" name="FNAME" id="mce-FNAME" class="w-full px-3 border border-[#959595] focus:border-blue-500 focus:outline-none rounded-lg mb-4 py-3 text-xl bg-[#f2eded] placeholder-[#55B57A] text-[55B57A] mt-2 fontregular">
							<label class="text-xl md:text-2xl text-black fontregular font-semibold">Email Address</label>
							<input placeholder="ex. johndoe@gmail.com" type="email" value="" name="EMAIL" id="mce-EMAIL" class="required email w-full px-3 border border-[#959595] focus:border-blue-500 focus:outline-none rounded-lg mb-4 py-3 text-xl bg-[#f2eded] placeholder-[#55B57A] text-[55B57A] mt-2 fontregular">
							<label class="flex justify-start md:justify-center mt-6 md:mr-12">
								<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button uppercase fontregular px-5 pt-3 pb-3 rounded-lg h-auto from-[#55B57A] to-[#94C4A7] text-lg tracking-[2px] hover:opacity-95 text-white md:ml-4 bg-gradient-to-b cursor-pointer">
							</label>
						</form>
					</div>	
				</div>
				<div class="bg-no-repeat md:-mt-52 footer-bg-image pt-4 px-3 md:px-0 md:pt-0">
					<div class="">
						<div class="md:flex md:justify-end">
							<div class="md:w-[55%] md:pr-[8%]">
								<img src="./Techhub-main-logo.png" class="w-32 md:w-44 md:mt-12 md:ml-auto mx-auto md:mx-0 md:mr-6" alt="">
								<p class="text-white fontextralight text-base mt-2 md:text-right">
									We are a community of tech developers <br>
									help us to grow the tech environment
								</p>
								<div class="flex mt-3 md:justify-end justify-start" id="newsletter">
								
										<router-link to href="https://www.linkedin.com/company/techhub-syd/?fbclid=IwAR05HV_Q99B_hhls9CR51jLwHSrdl8WeHexv_ZwNCQIHgDqEFqS9hx5P_B8" target="_blank" class="btn">
										<img src="./linkedin.png" class="w-7 md:w-9 md:ml-3 hover:opacity-90" alt="">
										</router-link>	
										<router-link to="#">
										<img src="./facebook.png" class="w-7 md:w-9 ml-3 hover:opacity-90" alt="">
										</router-link>
										<router-link to="#">
										<img src="./third-icon.png" class="w-7 md:w-9 ml-3 hover:opacity-90" alt="">
										</router-link>
								</div>
								<div class="flex justify-start md:justify-between mt-4">
									<div class="md:w-auto w-[50%]">
										<router-link to="/" class="block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											Home
										</router-link>
										<router-link to="/about" class="mt-[2px] block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											About Us
										</router-link>
										<router-link to="#" class="mt-[2px] block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											News
										</router-link>
										<router-link to="/event" class="mt-[2px] block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											Events
										</router-link>
										<router-link to="#" class="mt-[2px] block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											Members Directory 
										</router-link>
									</div>
									<!-- <div class="md:w-auto w-[50%]">
										<router-link to="#" class="block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											Committee
										</router-link>
										<router-link to="#" class="mt-[3px] block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											Partners
										</router-link>
										<router-link to="#" class="mt-[3px] block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											Testimonial
										</router-link>
										<router-link to="#" class="mt-[3px] block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											Programmes
										</router-link>
										<router-link to="#" class="mt-[3px] block fontlight text-[9px] hover:text-opacity-90 font-medium md:font-semibold text-white tracking-[1px]">
											Contact Us
										</router-link>
									</div> -->
									<div class="w-[250px] hidden md:block">
										<p class="text-white fontregular text-xs">
											Sign up with your email address to receice
											news and updates.
										</p>
										<form action="https://gmail.us13.list-manage.com/subscribe/post?u=5df024671490b38dce17dddd3&amp;id=fb06cc83f7"
									 method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
									 class="validate mt-3 h-9 rounded-full w-full border border-[#efe9e9] flex items-center justify-between pl-4" target="_blank" novalidate>
										<input type="email" 
										name="EMAIL" class="required email placeholder-[#efe9e9] text-[#efe9e9] text-xs border-none outline-none bg-transparent" id="mce-EMAIL"
										placeholder="Ender your email ">
										<input type="submit" value="SUBMIT" name="subscribe" id="mc-embedded-subscribe" 
										class="button uppercase h-[30px] flex items-center px-4 rounded-full bg-white text-[#94C4A7] -ml-[2px] cursor-pointer hover:opacity-90 text-xs fontregular font-semibold">
									</form>
									</div>
								</div>
								<div class="block mt-6 md:hidden">
									<p class="text-white fontregular text-xs">
										Sign up with your email address to receice
										news and updates.
									</p>
                  <form action="https://gmail.us13.list-manage.com/subscribe/post?u=5df024671490b38dce17dddd3&amp;id=fb06cc83f7"
									 method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
									 class="validate mt-3 h-9 rounded-full w-full border border-[#efe9e9] flex items-center justify-between pl-4 pr-[2px]" target="_blank" novalidate>
										<input type="email" 
										name="EMAIL" class="required email placeholder-[#efe9e9] text-[#efe9e9] text-xs border-none outline-none bg-transparent" id="mce-EMAIL"
										placeholder="Ender your email ">
										<input type="submit" value="SUBMIT" name="subscribe" id="mc-embedded-subscribe" 
										class="button uppercase h-[30px] flex items-center px-4 rounded-full bg-white text-[#94C4A7] cursor-pointer hover:opacity-90 text-xs fontregular font-semibold">
									</form>
								</div>
								<div class="md:mb-4 mb-0 pb-4 md:pb-0 mt-6 md:flex justify-between">
									<h3 class="fontlight text-[8px] text-white">Copyright © 2018 Company Name. All Rights Reserved. | Privacy Policy</h3>
									<h3 class="fontlight text-[8px] mt-2 md:mt-0 text-white">Site Development by MMD’ers</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				  



		</div>
	</div>
  </div>
</template>
<script>
import { ref } from 'vue'

import Image1 from './Group111.png'
import Image2 from './Group111.png'

import db from "../firebase";
import {collection, getDocs } from 'firebase/firestore';

export default {
  created() {
    this.getEvents()
  },
	setup() {
		const currentEvent = ref(1)
		const lastEvent = ref([
			{id: 1, image: Image1},
			{id: 2, image: Image2},
			{id: 3, image: Image1},
			{id: 4, image: Image2},
			{id: 5, image: Image1},
			{id: 6, image: Image2},
		])
		const next = () => {
			if (currentEvent.value == 6) {
				currentEvent.value = 1
			} else {
				currentEvent.value += 1
			}
		}
		const prev = () => {
			if (currentEvent.value == 1) {
				currentEvent.value = 5
			} else {
				currentEvent.value -= 1
			}
		}

		return{
			lastEvent,
			currentEvent,
			next,
			prev,
			events: ref([]),
		}
	},
  methods: {
   async getEvents() {

      const eventsCol = collection(db, 'events')
      const docRef = await getDocs(eventsCol)

      console.log(docRef);

      docRef.forEach((doc) => {
        this.events.push(doc.data())
      })
    }
  }
}
</script>
<style scoped>
@font-face {
			font-family: fontlight;
			src: url('./LexendDeca-Light.ttf');
		}
		@font-face {
			font-family: fontextralight;
			src: url('./LexendDeca-ExtraLight.ttf');
		}
		@font-face {
			font-family: fontregular;
			src: url('./LexendDeca-Regular.ttf');
		}
		.fontlight{
			font-family: fontlight !important;
		}
		.fontextralight{
			font-family: fontextralight !important;
		}
		.fontregular{
			font-family: fontregular !important;
		}
    html, div, body{
      scroll-behavior: smooth !important;
    }
		.header-bg-img{
			background-image: url('./bg-header.png');
			background-size: 100%;
		}
		.footer-bg-image{
			background-image: url('./Shape5copy2.png');
			background-size: 100%;
		}

		@media screen and (max-width: 786px) {
			.header-bg-img{
				background-color: #55B57A;
				background-image: none;
			}
			.footer-bg-image{
				background-image: none;
				background-color: #55B57A;
			}
		}
</style>
