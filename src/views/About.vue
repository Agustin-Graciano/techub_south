<template>
  <div>
    <div class="max-w-[1500px] mx-auto">
		<div class="md:h-[500px] lg:h-[540px] xl:h-[600px] relative">
		<div class="w-full md:h-[420px] lg:h-[420px] bg-no-repeat header-bg-img">
			<div class="md:flex justify-between items-center px-4 md:px-6 md:py-2">
				<div class="flex items-center md:justify-start justify-between py-2 md:py-0">
					<router-link to ="#">
					<img src="./Techhub-main-logo.png" alt="" class="w-16 md:w-24">
					</router-link>
					<router-link to href="https://www.linkedin.com/company/techhub-syd/?fbclid=IwAR05HV_Q99B_hhls9CR51jLwHSrdl8WeHexv_ZwNCQIHgDqEFqS9hx5P_B8" target="_blank" class="btn hidden md:block">
					<img src="./linkedin.png" href="www.linkedin.com" class="btn w-8 ml-2 hover:opacity-90" alt="">
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
		<div class="mt-12 relative">
			<h2 class="text-xl md:text-2xl tracking-[5px] uppercase md:pl-[9%] px-3 md:px-0">
                <span class="text-[#324857] font-semibold fontextralight">our </span>
				<span class="text-[#55B57A] font-extrabold fontlight"><b>mission</b></span>
			</h2>
			<img src="./right-round.png" class="hidden md:block h-72 -mt-48 absolute right-0 w-12" alt="">
            <div class="md:max-w-[82%] md:mx-auto px-3 md:px-0">
              <img src="./left-round.png" class="absolute left-0 w-20 mt-36 hidden md:block" alt="">
                <p class="text-[#525252] fontextralight text-lg font-semibold mt-2 leading-[30px]">
                    To facilitate events for tech startups and offer access to investors and students 
										in the southern region in order to strengthen the startup and tech eco-system in the region through a powerful community.
										Along with Match commercial founders with tech founders to create new tech ventures including inspirartional talks with inspirational talks from successful tech founders, industry leaders and business angels.
                </p>
                <h2 class="text-xl md:text-2xl tracking-[5px] uppercase text-left md:text-right mt-8">
                    <span class="text-[#324857] font-semibold fontextralight">our </span>
                    <span class="text-[#55B57A] font-extrabold fontlight"><b>vision</b></span>		
                </h2>
                <p class="text-[#525252] fontextralight text-lg font-semibold mt-2 leading-[30px]">
                    Strengthen the startup and tech eco-system in the region through a powerful community.
										Along with Match commercial founders with tech founders to create new tech ventures including inspirartional talks with inspirational talks from successful tech founders, industry leaders and business angels.
                </p>
                <h2 class="text-xl md:text-2xl tracking-[5px] uppercase mt-8">
                    <span class="text-[#324857] font-semibold fontextralight">meet the </span>
                    <span class="text-[#55B57A] font-extrabold fontlight"><b>team</b></span>
                </h2>
                <img src="./right-round.png" class="absolute right-0 w-20 mt-96 hidden md:block" alt="">
                <div class="md:grid md:grid-cols-2 mt-8 md:gap-20 md:mx-12">
                    <div class="mt-8 md:mt-0">
                        <img src="./kasper.jpg" class="w-full rounded-lg" alt="">
                        <h3 class="text-xl mt-4 md:mt-2 tracking-[1px] text-[#55B57A] font-extrabold fontlight">
                            Kasper B. Thomsen
                        </h3>
                        <h3 class="text-base mt-1 text-[##7A839E] fontextralight">
                            Founder
                        </h3>
                        <div class="h-[1px] my-2 md:my-4 bg-[#c1bfbf] w-full"></div>
                        <p class="text-sm mt-1 text-[##7A839E] fontlight">
                            Entrepreneur & Investor within technology.</p>
												<p class="text-sm mt-1 text-[##7A839E] fontlight">Worked with digital marketing, mobile apps / software products and within the tech startup ecosystem since 2005.</p>
												<p class="text-sm mt-1 text-[##7A839E] fontlight">Moving the early stage tech firm TECHHUB INVEST, forward.</p>
													
                        
                        <div class="flex mt-8 items-center">
                            <router-link to="#">
                            <img src="./003-facebook.png" class="w-auto" alt="" link>
                            </router-link>
                            <router-link to="#">
                            <img src="./002-google-plus.png" class="w-auto ml-5" alt="">
                            </router-link>
                            <router-link to="#">
                            <img src="./001-twitter-logo-silhouette.png" class="w-auto ml-5" alt="">
                            </router-link>
        
                        </div>
                    </div>
                    <div class="mt-8 md:mt-0">
                        <img src="./Trine.jpg" class="w-full rounded-lg" alt="">
                        <h3 class="text-xl mt-4 md:mt-2 tracking-[1px] text-[#55B57A] font-extrabold fontlight">
                            Trine Falbe
                        </h3>
                        <h3 class="text-base mt-1 text-[##7A839E] fontextralight">
                            Partner
                        </h3>
                        <div class="h-[1px] my-2 md:my-4 bg-[#c1bfbf] w-full"></div>
                        <p class="text-sm mt-1 text-[##7A839E] fontlight">
													  Ethical design and UX expert.</p>
                        <p class="text-sm mt-1 text-[##7A839E] fontlight"> Worked with user experience design for 20 years. Digital customer and user experience in news, for kids, and in various e-commerce.</p>
                        <p class="text-sm mt-1 text-[##7A839E] fontlight"> UX educator for a decade, I’ve written books and frequently speak at international conferences. </p>
                        
                        <div class="flex mt-8 items-center">
                            <router-link to="#">
                            <img src="./003-facebook.png" class="w-auto " alt="">
                            </router-link>
                            <router-link to="#">
                            <img src="./002-google-plus.png" class="w-auto ml-5" alt="">
                            </router-link>
                            <router-link to="#">
                            <img src="./001-twitter-logo-silhouette.png" class="w-auto ml-5" alt="">
                            </router-link>
                        </div>
                    </div>
                    <div class="mt-8 md:mt-0">
                        <img src="./Ronni.jpg" class="w-full rounded-lg" alt="">
                        <h3 class="text-xl mt-4 md:mt-2 tracking-[1px] text-[#55B57A] font-extrabold fontlight">
                            Ronni Baslund
                        </h3>
                        <h3 class="text-base mt-1 text-[##7A839E] fontextralight">
                            Partner
                        </h3>
                        <div class="h-[1px] my-2 md:my-4 bg-[#c1bfbf] w-full"></div>
                        <p class="text-sm mt-1 text-[##7A839E] fontlight">
                            Working as Interim CEO / CTO at Creditro A/S.</p>
														<p class="text-sm mt-1 text-[##7A839E] fontlight">
															VP of engineering at Shoreline.</p>
															<p class="text-sm mt-1 text-[##7A839E] fontlight">
															Lead Fullstack developer at Kids-world.dk.</p>
                        <div class="flex mt-8 items-center">
                            <router-link to="#">
                            <img src="./003-facebook.png" class="w-auto " alt="">
                            </router-link>
                            <router-link to="#">
                            <img src="./002-google-plus.png" class="w-auto ml-5" alt="">
                            </router-link>
                            <router-link to="#">
                            <img src="./001-twitter-logo-silhouette.png" class="w-auto ml-5" alt="">
                            </router-link>
                        </div>
                    </div>
                   
                </div>
                <img src="./left-round.png" class="absolute left-0 w-28 -mt-20 hidden md:block" alt="">
                <div class="mt-10 md:mt-2">
                  <img src="./green-logo.png" class="w-48 md:w-80 mx-auto" alt="">
                  <p class="text-[#525252] fontregular text-xl md:text-2xl mt-6 md:mt-10 md:w-[500px] mx-auto">
                    Want to get in contact? Don’t hesitate to send us a message!
                  </p>
                  <div class="flex justify-center mt-4">
                    <router-link to href="https://www.linkedin.com/company/techhub-syd/?fbclid=IwAR05HV_Q99B_hhls9CR51jLwHSrdl8WeHexv_ZwNCQIHgDqEFqS9hx5P_B8" target="_blank" class=" btn rounded-lg from-[#55B57A] to-[#94C4A7] text-[10px] flex justify-center items-center hover:opacity-90 mx-6 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-b">
                      <img src="./linkedin.png" class="h-8 md:h-12 w-8 md:w-12" alt="">
                    </router-link>
                    <router-link to="#" class="rounded-lg from-[#55B57A] to-[#94C4A7] text-[10px] flex justify-center items-center hover:opacity-90 mx-6 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-b">
                      <img src="./facebook.png" class="h-8 md:h-12 w-8 md:w-12" alt="">
                    </router-link>
                    <router-link to="#" class="rounded-lg from-[#55B57A] to-[#94C4A7] text-[10px] flex justify-center items-center hover:opacity-90 mx-6 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-b">
                      <img src="./third-icon.png" class="h-8 md:h-12 w-8 md:w-12" alt="">
                    </router-link>
                  </div>
                  <p class="text-[#525252] fontregular text-xl md:text-2xl mt-6 text-center">
                    Or fill in our contact form <router-link to="/contact" class="text-[#55B57A] hover:text-opacity-90">here</router-link>
                  </p>
                </div>
            </div>
		</div>
		<div class="mt-8">
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
				<div class="bg-no-repeat md:-mt-52 footer-bg-image pt-4 px-3 md:px-0 md:pt-0" id="newsletter">
					<div class="">
						<div class="md:flex md:justify-end">
							<div class="md:w-[55%] md:pr-[8%]">
								<img src="./Techhub-main-logo.png" class="w-32 md:w-44 md:mt-12 md:ml-auto mx-auto md:mx-0 md:mr-6" alt="">
								<p class="text-white fontextralight text-base mt-2 md:text-right">
									We are a community of tech developers <br>
									help us to grow the tech environment
								</p>
								<div class="flex mt-3 md:justify-end justify-start">
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
<style scoped>
@font-face {
			font-family: fontlight;
			src: url(./LexendDeca-Light.ttf);
		}
		@font-face {
			font-family: fontextralight;
			src: url(./LexendDeca-ExtraLight.ttf);
		}
		@font-face {
			font-family: fontregular;
			src: url(./LexendDeca-Regular.ttf);
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