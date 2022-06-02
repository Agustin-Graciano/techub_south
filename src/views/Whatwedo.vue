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
          <h2 class="text-xl md:text-2xl tracking-[5px] uppercase md:pl-[4%] px-3 md:px-0">
            <span class="text-[#324857] font-semibold fontextralight">what we </span>
				      <span class="text-[#55B57A] font-extrabold fontlight"><b>do</b></span>
			          </h2>
                <img src="./left-round.png" class="absolute left-0 w-16 mt-80 hidden md:block" alt="">
                <div class="md:grid md:grid-cols-2 mt-8 md:gap-20 md:mx-12">
                    <div class="mt-12 md:mt-0">
                        <img src="./Tech2.jpg" class="w-full rounded-lg" alt="">
                        <h3 class="text-xl mt-4 md:mt-3 tracking-[1px] text-[#55B57A] font-extrabold text-center fontlight">
                            Inspirational talks
                        </h3>
                        <p class="text-sm mt-3 text-[##7A839E] fontlight">
                            We partner with inspirational leaders and tech
                            entrepreneurs who have either built own venture
                            or invested in startups. <br> <br>
                            They go on stage to hand out wisdom from the
                            biggest success to various failures. This to tell the
                            true story of building tech companies and to
                            inspire others
                        </p>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <img src="./Tech4.jpg" class="w-full rounded-lg" alt="">
                        <h3 class="text-xl mt-4 md:mt-3 tracking-[1px] text-[#55B57A] font-extrabold text-center fontlight">
                            Pitches
                        </h3>
                        <p class="text-sm mt-3 text-[##7A839E] fontlight">
                            We gather tech startups and smart investors to
                            match the two so we can help fuel the next
                            generation of tech startups in the region. <br> <br>
                            Startups will be chosen from four parameters such
                            as: Team, Product/service, Market potential and
                            business model.

                        </p>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <img src="./Tech3.jpg" class="w-full rounded-lg" alt="">
                        <h3 class="text-xl mt-4 md:mt-3 tracking-[1px] text-[#55B57A] font-extrabold text-center fontlight">
                            Co-founder meetups
                        </h3>
                        <p class="text-sm mt-3 text-[##7A839E] fontlight">
                            It is often hard to find the right co-founder for your
                            startup. We setup a match-making event where
                            commercial founders together with tech
                            development founders can setup the right team
                            from the start.
                        </p>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <img src="./Tech5.jpg" class="w-full rounded-lg" alt="">
                        <h3 class="text-xl mt-4 md:mt-3 tracking-[1px] text-[#55B57A] font-extrabold text-center fontlight">
                            Startups pitch for student jobs
                        </h3>
                        <p class="text-sm mt-3 text-[##7A839E] fontlight">
                            We gather tech startups and smart investors to
                            match the two so we can help fuel the next
                            generation of tech startups in the region. <br> <br>
                            Startups will be chosen from four parameters such
                            as: Team, Product/service, Market potential and
                            business model.
                        </p>
                    </div>
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
										<router-link to href="https://www.linkedin.com/company/techhub-syd/?fbclid=IwAR05HV_Q99B_hhls9CR51jLwHSrdl8WeHexv_ZwNCQIHgDqEFqS9hx5P_B8" target="_blank" class="btn hidden md:block">
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