export default function Contact() {
	return (
		<section id="contact" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">
				Contact
			</h3>
			<p className="text-zinc-800 dark:text-zinc-200">Hubungi Saya</p>

			<div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
				<span className="text-zinc-500 dark:text-zinc-300">
					rrivaldi230@gmail.com
				</span>

				<a
					href="https://www.instagram.com/usernamekamu"
					className="text-zinc-500 dark:text-zinc-300 flex items-center gap-x-2.5"
				>
					{/* === Instagram Icon === */}
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 2C4.243 2 2 4.243 2 7V17C2 19.757 4.243 22 7 22H17C19.757 22 22 19.757 22 17V7C22 4.243 19.757 2 17 2H7ZM7 4H17C18.654 4 20 5.346 20 7V17C20 18.654 18.654 20 17 20H7C5.346 20 4 18.654 4 17V7C4 5.346 5.346 4 7 4ZM17 6C16.448 6 16 6.448 16 7C16 7.552 16.448 8 17 8C17.552 8 18 7.552 18 7C18 6.448 17.552 6 17 6ZM12 8C9.794 8 8 9.794 8 12C8 14.206 9.794 16 12 16C14.206 16 16 14.206 16 12C16 9.794 14.206 8 12 8ZM12 10C13.103 10 14 10.897 14 12C14 13.103 13.103 14 12 14C10.897 14 10 13.103 10 12C10 10.897 10.897 10 12 10Z"
							fill="currentColor"
						/>
					</svg>
					rivbirtx
				</a>
			</div>
		</section>
	);
}
