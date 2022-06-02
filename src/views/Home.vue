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
				<h3 class="fontlight text-lg md:text-xl mt-2 text-white md:text-[#55B57A] font-extrabold text-shadow-xl">
					Inovation, Investment and Technology in
				</h3>
				<h3 class="fontlight text-lg md:text-xl mt-2 ml-0 md:ml-24 text-white font-extrabold text-shadow-xl">
					Southern <br> Denmark
				</h3>
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
			<h2 class="text-xl tracking-[5px] uppercase md:pl-[9%] text-center md:text-left">
				<span class="text-[#55B57A] font-extrabold fontlight"><b>upcoming </b></span>
				<span class="text-[#324857] font-semibold fontextralight">events</span>
			</h2>
			<img src="./right-round.png" class="hidden md:block h-72 -mt-48 absolute right-0 w-12" alt="">
		<div class="md:flex mt-3">
			<div class="hidden w-[8%] md:flex items-end pr-4">
				<img src="./left-round.png" class="w-full h-80 -mb-32" alt="">
			</div>
			<div class="md:w-[51%] relative">
				<div class="w-full absolute from-white/5 to-white/95 bg-gradient-to-b drop-shadow-md rounded-lg h-[250px] md:h-[340px] top-0 right-0 left-0 z-40"></div>
				<img src="./Tech1.jpg" class="w-full h-[250px] md:h-[340px] rounded-lg" alt="">
				<div class="md:-mt-28 -mt-20 md:pl-6 pl-4 absolute z-50">
					<h4 class="text-shadow-sm fontregular text-[#324857] font-semibold text-sm">
						Inspirational Talk with tech-founders
					</h4>
					<h5 class="text-shadow-sm fontlight text-[#55B57A] uppercase font-extrabold text-[11px] mt-3">05, JULY, 12 PM - 2 PM</h5>
					<p class="text-shadow-sm text-[#324857] text-[9px] mt-1 fontlight font-bold">
						Get ready for an Inspirational Talk afternoon with focus on tech-founders, their road to success and the valuable learnings on their way.
					</p>
				</div>
				<div class="flex mt-2 justify-center">
					<router-link to="#" class="text-[#55B57A] fontlight text-base font-medium border-b border-[#55B57A]">Learn more</router-link>
					<span class="text-[#324857] fontlight text-base font-medium ml-2">about this event, or</span>
					<router-link to="#" class="text-[#55B57A] fontlight text-base font-medium border-b border-[#55B57A] ml-2">signup</router-link>
				</div>
			</div>
			<div class="md:w-[41%] md:pl-8 px-3 md:px-0 mt-6 md:mt-0">
				<div class="">
					<h4 class="fontregular text-[#324857] font-semibold text-sm">
						Investor Pitch Nights
					</h4>
					<h5 class="fontlight text-[#55B57A] uppercase font-extrabold text-[11px] mt-[2px]">08, JULY, 7 PM - 9 PM</h5>
					<p class="text-[#525252] text-[9px] mt-1 fontlight">
						Get ready for Investor Pitch Nights with focus on tech-founders, their road to success and the valuable learnings on their way.
					</p>
					<div class="flex mt-2">
						<router-link to="#" class="text-[#55B57A] fontlight text-[10px] border-b border-[#55B57A]">Learn more</router-link>
						<span class="text-[#324857] fontlight text-[10px] ml-2">about this event, or</span>
						<router-link to="#" class="text-[#55B57A] fontlight text-[10px] border-b border-[#55B57A] ml-2">signup</router-link>
					</div>
				</div>
				<div class="mt-3">
					<h4 class="fontregular text-[#324857] font-semibold text-sm">
						Find your Co-founder
					</h4>
					<h5 class="fontlight text-[#55B57A] uppercase font-extrabold text-[11px] mt-[2px]">12, JULY, 4 PM - 6 PM</h5>
					<p class="text-[#525252] text-[9px] mt-1 fontlight">
						Get ready for Find your Co-founder with focus on tech-founders, their road to success and the valuable learnings on their way
						and the event will be held at the Southwest business academy of esbjerg.
					</p>
					<div class="flex mt-2">
						<router-link to="#" class="text-[#55B57A] fontlight text-[10px] border-b border-[#55B57A]">Learn more</router-link>
						<span class="text-[#324857] fontlight text-[10px] ml-2">about this event, or</span>
						<router-link to="#" class="text-[#55B57A] fontlight text-[10px] border-b border-[#55B57A] ml-2">signup</router-link>
					</div>
				</div>
				<div class="mt-3">
					<h4 class="fontregular text-[#324857] font-semibold text-sm">
						Startups pitch
					</h4>
					<h5 class="fontlight text-[#55B57A] uppercase font-extrabold text-[11px] mt-[2px]">15, JULY, 1 PM - 3PM</h5>
					<p class="text-[#525252] text-[9px] mt-1 fontlight">
						Get ready for Startups pitch with focus on tech-founders, their road to success and the valuable learnings on their way
						and the event will be held at the Southwest business academy of esbjerg.
					</p>
					<div class="flex mt-2">
						<router-link to="#" class="text-[#55B57A] fontlight text-[10px] border-b border-[#55B57A]">Learn more</router-link>
						<span class="text-[#324857] fontlight text-[10px] ml-2">about this event, or</span>
						<router-link to="#" class="text-[#55B57A] fontlight text-[10px] border-b border-[#55B57A] ml-2">signup</router-link>
					</div>
				</div>
			</div>
		</div>
		</div>
		<div class="mt-8">
			<h4 class="fontregular text-[#324857] font-semibold text-base text-center">
				See all our upcoming events
			</h4>
			<div class="flex justify-center mt-1">
				<router-link to="/event" class="uppercase fontlight font-medium px-3 pt-1 pb-1 rounded-lg h-auto from-[#55B57A] to-[#94C4A7] text-sm hover:opacity-95 text-white ml-4 bg-gradient-to-b">
					here
				</router-link>
			</div>
			<div class="flex justify-end mt-12 pr-[8%]">
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

				<div class="md:ml-[8%]">
					<h2 class="mt-12 text-xl tracking-[6px] uppercase text-center md:text-left md:pl-2">
						<span class="text-[#324857] font-semibold fontextralight">about </span>
						<span class="text-[#55B57A] font-extrabold fontlight"><b>us</b></span>
					</h2>
					<div class="flex">
					<div class="md:w-[60%]">
						<div class="bg-white shadow-lg rounded-lg pt-6 md:pt-10 pb-6 md:pb-14 mt-4 md:mt-8 ">
						<div class="md:w-[80%]">
							<h5 class="text-sm tracking-[2px] uppercase text-[#324857] font-semibold fontlight md:w-[35%] text-center md:text-right">statistics</h5>
							<div class="mt-8 flex">
								<div class="w-[25%] md:w-[35%]">
									<h1 class="text-xl md:text-5xl text-transparent bg-clip-text from-[#19aa51] to-[#c4d6cc] bg-gradient-to-b fontregular text-right">90%</h1>
								</div>
								<div class="w-[75%] md:w-[65%] pl-6">
									<p class="text-[#525252] fontextralight text-xs font-semibold mt-2"> Of our community recommend us and are satisfied</p>
								</div>
							</div>
							<div class="mt-9 flex">
								<div class="w-[25%] md:w-[35%]">
									<h1 class="text-xl md:text-5xl text-transparent bg-clip-text from-[#19aa51] to-[#c4d6cc] bg-gradient-to-b fontregular text-right">27K+</h1>
								</div>
								<div class="w-[75%] md:w-[65%] pl-6">
									<p class="text-[#525252] fontextralight text-xs font-semibold mt-2">Invested in tech projects from Southwest of Denmark</p>
								</div>
							</div>
							<div class="mt-9 flex">
								<div class="w-[25%] md:w-[35%]">
									<h1 class="text-xl md:text-5xl text-transparent bg-clip-text from-[#19aa51] to-[#c4d6cc] bg-gradient-to-b fontregular text-right">33.33</h1>
								</div>
								<div class="w-[75%] md:w-[65%] pl-6">
									<p class="text-[#525252] fontextralight text-xs font-semibold mt-2">Investors from Southwest of Denmark</p>
								</div>
							</div>
							<div class="mt-9 flex">
								<div class="w-[25%] md:w-[35%]">
									<h1 class="text-xl md:text-5xl text-transparent bg-clip-text from-[#19aa51] to-[#c4d6cc] bg-gradient-to-b fontregular text-right">10</h1>
								</div>
								<div class="w-[75%] md:w-[65%] pl-6">
									<p class="text-[#525252] fontextralight text-xs font-semibold mt-2">Starups founded thanks to our community</p>
								</div>
							</div>
						</div>
						</div>
					</div>
					<div class="w-[40%] justify-end hidden md:flex">
						<img src="./right-keyboard-round.png" class="h-[800px] -mt-[105px] absolute" alt="">
					</div>
					</div>

				</div>
				<div class="mt-0 md:mt-10 md:mx-[8%] px-3 md:px-6">
					<div class="mt-6" v-for="(item, key) in testimonials" :key="key" :class="key % 2 == 0 ? 'flex md:flex-row flex-col-reverse' : 'flex md:flex-row-reverse flex-col-reverse'">
						<div class="w-full md:w-[50%] md:px-4 pt-4 md:pt-0">
							<p class="text-[#525252] fontextralight text-lg font-semibold mt-2 leading-[30px]">
								{{ item.comment }}
							</p>
						</div>
						<div class="w-full md:w-[50%] md:px-4 mt-12 md:mt-0">
							<img src="./chris.png" class="w-full h-[200px]" :alt="item.image">
							<h4 class="text-[20px] italic text-[#324857] md:text-right font-serif mt-3 font-medium">{{ item.name }}</h4>
						</div>
					</div>
				</div>
				<div class="block md:hidden mt-12">
					<h5 class="text-2xl tracking-[6px] md:pl-6 uppercase text-[#55B57A] font-extrabold fontlight text-center md:text-left">partners</h5>
					<img src="./Image5.png" class="w-[70%] mx-auto" alt="">
				</div>
				<div class="flex mt-0 md:mt-12">
					<div class="hidden md:block w-[8%]">
						<img src="./left-round.png" class="h-96 -mt-32" alt="">
					</div>
					<div class="w-[6%] md:w-[3%] pt-16 flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" @click="prevPartner" xmlns:xlink="http://www.w3.org/1999/xlink" class="cursor-pointer w-10" viewBox="0 0 50 49">
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
					<div class="flex w-[79%]" v-for="item in partners" :key="item.id" v-show="currentPartners == item.id">
					<div class="w-[25%] hidden md:flex items-end relative">
						<h5 class="text-xl tracking-[6px] pl-6 uppercase text-[#55B57A] font-extrabold fontlight absolute top-0">partners</h5>
						<img :src="item.image" class="w-full" alt="">
					</div>
					<div class="md:w-[75%] pl-2 md:pl-6 pt-0 md:pt-16">
						<h2 class="uppercase text-2xl tracking-[1px] text-[#324857] fontregular font-semibold">{{ item.heading }}</h2>
						<p v-html="item.description" class="text-[#525252] fontextralight text-sm font-semibold mt-3">
							
						</p>
					</div>
					</div>
					<div class="w-[6%] md:w-[3%] pt-16 flex ml-2 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" @click="nextPartner" xmlns:xlink="http://www.w3.org/1999/xlink" class="cursor-pointer w-10" viewBox="0 0 50 49">
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
				<div class="mt-10">
					<h2 class="mt-12 text-sm tracking-[5px] uppercase text-center md:text-left md:ml-[14%]">
						<span class="text-[#55B57A] font-extrabold fontlight"><b>featured</b></span>
						<span class="text-[#324857] font-semibold fontextralight">members</span>
					</h2>
					<div class="md:flex hidden justify-center items-center w-[80%] mx-auto">
						<router-link to href="https://www.easv.dk/en/" target="_blank" class="btn">
						<img src="./Image4.png" class="w-[100px]" alt="">
						</router-link>
						<router-link to href="https://www.proff.dk/firma/a.-thomsen-holding-aps/esbjerg-v/holdingselskaper/GM2N4FI06Y4/" target="_blank" class="btn">
						<img src="./Image6.png" class="ml-6 w-[100px]" alt="">
						</router-link>
						<router-link to href="https://www.teknologiudvikling.dk/innovationsfonden?gclid=Cj0KCQjw1tGUBhDXARIsAIJx01kys8e5sF6eA6umfBTxE8qKhl4VMhiBgY5MqM6MsPIucu7eHkQSnXYaAr1lEALw_wcB" target="_blank" class="btn">
						<img src="./Image7.png" class="ml-6 w-[100px]" alt="">
						</router-link>
						<router-link to href="https://www.businessesbjerg.com/en/" target="_blank" class="btn">
						<img src="./Image8.png" class="ml-6 w-[100px]" alt="">
						</router-link>
						<router-link to href="https://www2.deloitte.com/dk/da.html" target="_blank" class="btn">
						<img src="./Image9.png" class="ml-6 w-[100px]" alt="">
						</router-link>
						<router-link to href="https://www.aau.dk/uddannelser?gclid=Cj0KCQjw1tGUBhDXARIsAIJx01nRH7XRUSs8exs1iQtiyGSxf-uPDOPMdfKoHvHtf2uLfn_xixa6o-8aAkdDEALw_wcB" target="_blank" class="btn">
						<img src="./Image-1.png" class="ml-6 w-[100px]" alt="">
						</router-link>
					</div>
					<div class="flex md:hidden justify-between items-center px-3 pt-4">
						<img src="./Image4.png" class="w-[100px]" alt="">
						<img src="./Image6.png" class="w-[100px]" alt="">
						<img src="./Image7.png" class="w-[100px]" alt="">
					</div>
					<div class="flex md:hidden justify-between items-center px-3">
						<img src="./Image8.png" class="w-[100px]" alt="">
						<img src="./Image9.png" class="w-[100px]" alt="">
						<img src="./Image-1.png" class="w-[100px]" alt="">
					</div>
				</div>
				<div class="mt-8">
					<img src="./Group111.png" class="w-full" alt="">
				</div>

				<div class="mt-12 md:max-w-[84%] md:mx-auto px-3 md:px-0">
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
								<div class="flex justify-start md:justify-between mt-4" id="newsletter">
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
											Sign up with your email address to receive
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
import Image3 from './Image5.png'

import db from "../firebase";
import {collection, getDocs } from 'firebase/firestore';

export default {
	created() {
    	this.getTestimonials()
  	},
	setup() {
		const currentEvent = ref(1)
		const currentPartners = ref(1)
		const lastEvent = ref([
			{id: 1, image: Image1},
			{id: 2, image: Image2},
			{id: 3, image: Image1},
			{id: 4, image: Image2},
			{id: 5, image: Image1},
			{id: 6, image: Image2},
		])
		const partners = ref([
			{id: 1, image: Image3, heading: 'AALBORG UNIVERSITY ESBJERG', description: `Aalborg University (AAU) is internationally oriented and integrates internationalisation into its values and methods at all levels of education, research and knowledge dissemination.

      Internationalisation is not an end in itself, but a means to achieve higher performance within AAU’s core areas of activity. The field in which a university operates is fundamentally international, since knowledge and talent do not only exist within national boundaries but must be sought and created through interaction with the rest of the world.

<br> <br> Unique and modern approach to education`},
			{id: 2, image: Image3, heading: 'AALBORG UNIVERSITY ESBJERG', description: `Aalborg University is a young university with only 40 years of history. Since its establishment in 1974, AAU has been characterised by a problem-based and project-oriented teaching method (PBL) – also called the Aalborg Model, and by extensive collaboration with the surrounding society.

<br> <br> Unique and modern approach to education`},
			{id: 3, image: Image3, heading: 'AALBORG UNIVERSITY ESBJERG', description: `Aalborg University's strategy Knowledge for the World 2022-26 makes the basis for the university's development. You can read about the university's strategic direction, characterics and strategic focal points.

<br> <br> Unique and modern approach to education`},
			{id: 4, image: Image3, heading: 'AALBORG UNIVERSITY ESBJERG', description: `Aalborg University (AAU) is internationally oriented and integrates internationalisation into its values and methods at all levels of education, research and knowledge dissemination. Internationalisation is not an end in itself, but a means to achieve higher performance within AAU’s core areas of activity. The field in which a university operates is fundamentally international, since knowledge and talent do not only exist within national boundaries but must be sought and created through interaction with the rest of the world.  .

<br> <br> Unique and modern approach to education`},
			{id: 5, image: Image3, heading: 'AALBORG UNIVERSITY ESBJERG', description: `The Aalborg University Board is the highest authority of Aalborg University (AAU), and the University’s Rector is responsible for the day-to-day management of AAU. The Rector is head of the executive management and delegates work tasks and responsibility to the members of the executive management. Learn more about the main organisational units at Aalborg University in the chart below.

<br> <br> Unique and modern approach to education`},
			{id: 6, image: Image3, heading: 'AALBORG UNIVERSITY ESBJERG', description: `The University Statutes describe the overall objectives of Aalborg University and establish the structure of the management and general organisation of the University. They also determine rules regarding the election of members of the University Board, the academic councils and the study boards, and stipulates overall rules concerning accounting..

<br> <br> Unique and modern approach to education`}
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
		const nextPartner = () => {
			if (currentPartners.value == 6) {
				currentPartners.value = 1
			} else {
				currentPartners.value += 1
			}
		}
		const prevPartner = () => {
			if (currentPartners.value == 1) {
				currentPartners.value = 5
			} else {
				currentPartners.value -= 1
			}
		}

		return{
			testimonials: ref([]),
			lastEvent,
			currentEvent,
			next,
			prev,
			partners,
			currentPartners,
			nextPartner,
			prevPartner
		}
	},
	methods: {
		async getTestimonials() {

			const Col = collection(db, 'testimonials')
			const docRef = await getDocs(Col)

			console.log(docRef);

			docRef.forEach((doc) => {
				this.testimonials.push(doc.data())
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
		#slider .carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#slider .carousel__slide {
  padding: 10px;
}

#slider .carousel__prev,
#slider .carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  color: #000 !important;
}
</style>
