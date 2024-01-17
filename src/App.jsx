import React, { useState } from 'react'
import Img from '../images/hero-desktop.jpg'
import Logo from '../images/logo.svg'
import Arrow from '../images/icon-arrow.svg'
import Error from '../images/icon-error.svg'
function App() {

	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email.trim()) {
			setError('This field is required');
		} else if (email.indexOf("@") < 0 || email.indexOf(".com" < 0)) {
			setError("Please provide a valid email")
		} else {
			setError('');
			console.log('Email submitted:', email);
		}

	};

	const handleChange = (e) => {
		setEmail(e.target.value);
		setError('');
	};

	return (
		<div className="w-full h-screen flex justify-center items-center bg-custom bg-cover bg-no-repeat bg-left">
			<div className='w-full lg:max-w-[1440px] h-full lg:max-h-[800px] m-auto grid lg:grid-cols-custom-grid-column lg:grid-rows-custom-grid-row grid-cols-custom-grid-mobile grid-rows-custom-grid-row-mobile'>
				<header className='lg:col-[2_/_3] lg:row-[2_/_3] justify-self-start col-[2] row-[2]'>
					<figure>
						<img src={Logo} alt="" className='w-[100px] lg:w-full' />
					</figure>
				</header>

				{/* IMAGE CONTAINER */}
				<aside className='bg-custom-mobile lg:bg-hero col-[1_/_-1] row-[4_/_5] lg:col-[4_/_5] lg:row-[1_/_-1] bg-cover bg-[top_center] lg:bg-center bg-no-repeat'>
				</aside>
				<section className='max-w-[400px] col-[2] row-[6] lg:col-[2_/_3] lg:row-[4_/_5] lg:text-[4rem] lg:leading-[4.295rem] lg:tracking-[1.1rem]
									text-[2.4rem] leading-[2.63rem] tracking-[1rem] lg:text-left text-center lg:m-0 m-auto
						'>
					<h1 className='uppercase'>
						<span className='text-desatured-red font-light tracking-[1.15rem]'>we're</span>
						<p className='font-semibold'>coming soon</p>
					</h1>
				</section>
				<div className='max-w-[330px] lg:max-w-[440px] leading-[1.35rem] text-[.9rem] lg:text-base lg:leading-[1.75rem] text-desatured-red col-[2] row-[8] lg:col-[2_/_3] lg:row-[6_/_7] lg:text-left text-center lg:m-0 m-auto'>
					<p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
				</div>
				<form id='form' onSubmit={handleSubmit} className='w-[310px] row-[10] lg:w-[445px] col-[2] lg:row-[8] relative lg:m-0 m-auto'>
					<input type="text" placeholder='Email Address' value={email} onChange={handleChange}
						className={`bg-transparent w-full lg:w-[445px] h-[48px] lg:h-[56px] pl-[2rem] lg:pr-[9rem] rounded-full 
						border ${error != '' ? "border-red-500" : "border-desatured-red/40"} focus:outline-2 pr-[6rem]
					focus:outline-desatured-red/90 focus:-outline-offset-2 placeholder:text-desatured-red lg:placeholder:text-base placeholder:text-[.9rem]`} />
					<button type="submit" className='lg:w-[100px] w-[65px] lg:h-[56px] h-[48px] lg:pl-[2px] lg:pt-[3px] absolute right-0 bottom-px lg:bottom-1 flex justify-center items-center border-none rounded-full bg-gradient-135 shadow-lg !shadow-desatured-red/50'>
						<img src={Arrow} alt="" />
						<img src={Error} alt="" className={`${error === '' ? "hidden" : ""} absolute top-[17px] right-[117px]`} />
					</button>
					<span className='ml-[2rem] font-normal text-[.81rem] text-soft-red' id="error_msg">{error}</span>
				</form>
			</div>
		</div>
	)
}

export default App
