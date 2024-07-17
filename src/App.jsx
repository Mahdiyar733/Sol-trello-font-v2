import React, { useState } from "react";
import { ProfSvg } from "./svg/porfSvg";
import { MenuSvg } from "./svg/menuSvg";
import { HomeSvg } from "./svg/homeSvg";
import { SearchSvg } from "./svg/searchSvg";
import { ArrowSvg } from "./svg/arrowDDSvg";
import { SortSvg } from "./svg/sortSvg";
import { ArrowRightSvg, ArrowLeftSvg } from "./svg/arrowXSvg";
import { PlansSvg } from "./svg/plansContentSvg";
import { data } from "./data";
import { adminLogo } from "./svg/adminLogo";

console.log(data);

const dropDownContent = [
	{ name: "1مثال", path: "#" },
	{ name: "2مثال", path: "#" },
	{ name: "3مثال", path: "#" },
	{ name: "4مثال", path: "#" },
	{ name: "5مثال", path: "#" },
	{ name: "6مثال", path: "#" },
	{ name: "7مثال", path: "#" },
	{ name: "8مثال", path: "#" },
	{ name: "9مثال", path: "#" },
	{ name: "10مثال", path: "#" },
	{ name: "11مثال", path: "#" },
	{ name: "12مثال", path: "#" },
	{ name: "13مثال", path: "#" },
	{ name: "14مثال", path: "#" },
	{ name: "15مثال", path: "#" },
	{ name: "16مثال", path: "#" },
	{ name: "17مثال", path: "#" },
];

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	function handleIsOpen() {
		setIsOpen((is) => !is);
	}

	return (
		<>
			<div className="w-full h-screen pt-[74px] px-5 justify-center items-center gap-3 flex flex-col bg-blueMob overflow-hidden sm:flex-row relative">
				<div
					className={`z-50 fixed top-0 transition-all duration-150 bg-blueMob flex flex-row-reverse w-full h-[74px] py-3 px-2 justify-between items-center flex-shrink-0 border-b-[0.2px] border-solid border-[#ADB6A5] sm:w-auto sm:right-[112px] sm:left-0 sm:mx-5  ${
						!isOpen ? "sm:mr-0" : "sm:mr-[120px]"
					}`}>
					<SortBtn />
					<PlansContent />
				</div>
				<MainMob isOpen={isOpen} />
				<NavMobile />
			</div>
			<SideBar
				isOpen={isOpen}
				onIsOpen={handleIsOpen}
			/>
		</>
	);
};

const SideBar = ({ isOpen, onIsOpen }) => {
	return (
		<div
			className={`h-full fixed right-0 pt-0 top-0 bottom-0 transition-all duration-150 ${
				isOpen ? "w-[220px]" : "w-24"
			} p-2 bg-blueMob overflow-hidden sm:flex hidden justify-center items-center`}>
			<div className="w-full h-full flex flex-col items-center bg-blueMob overflow-hidden">
				<HeadSideBar
					isOpen={isOpen}
					onIsOpen={onIsOpen}
				/>
				<BodySideBar isOpen={isOpen} />
				<AdminDetailsSideBar isOpen={isOpen} />
			</div>
		</div>
	);
};

const HeadSideBar = ({ isOpen, onIsOpen }) => {
	return (
		<div className="min-h-[74px] w-full flex flex-row items-center justify-center px-3 border-b border-[#ADB6A5]">
			{isOpen && (
				<h1 className="text-black font-semibold text-xl ml-3">داشبورد سل</h1>
			)}
			{isOpen ? (
				<button
					className="hover:bg-slate-100 rounded-lg transition-all duration-200"
					onClick={onIsOpen}>
					<ArrowRightSvg />
				</button>
			) : (
				<button
					className="hover:bg-slate-100 rounded-lg transition-all duration-200"
					onClick={onIsOpen}>
					<ArrowLeftSvg />
				</button>
			)}
		</div>
	);
};

const BodySideBar = ({ isOpen }) => {
	return (
		<ul className="w-full bg-blueMob flex flex-col items-center p-2 overflow-auto">
			<li
				className={`w-full min-h-12 p-1 flex items-center gap-1 text-black hover:bg-slate-100 cursor-pointer rounded-lg transition-all duration-200 ${
					!isOpen ? "justify-center" : ""
				}`}>
				<PlansSvg />
				{isOpen && (
					<h2 className="text-base font-semibold">برنامه محتوایی ثابت</h2>
				)}
			</li>
			{dropDownContent.map((item) => {
				return (
					<li
						key={item.name}
						className={`w-full min-h-12 p-1 flex items-center gap-1 hover:bg-slate-100 rounded-lg transition-all duration-200 cursor-pointer text-black ${
							!isOpen ? "justify-center" : ""
						}`}>
						<PlansSvg />
						{isOpen && <h2 className="font-normal text-base">{item.name}</h2>}
					</li>
				);
			})}
		</ul>
	);
};

const AdminDetailsSideBar = ({ isOpen }) => {
	return (
		<div
			className="w-full h-32 shadow-sm p-3 items-center gap-3 bg-blueMob flex flex-row justify-center"
			style={{ boxShadow: "0px -1px 1px #0000002b" }}>
			<img
				src={adminLogo}
				alt="admin picture"
				className="rounded-full w-12 h-12 object-cover"
			/>

			{isOpen && (
				<div className="flex flex-col pr-2 text-black">
					<h2 className="font-semibold">لورم ایپسوم</h2>
					<h3 className="font-normal "> لورم ایپسوم</h3>
				</div>
			)}
		</div>
	);
};

const MainMob = ({ isOpen }) => {
	return (
		<div
			className={`w-screen transition-all duration-150 h-full relative z-0 overflow-y-scroll px-6 pb-20  ${
				isOpen ? "sm:pr-12 sm:p-0 sm:mr-[204px]  " : "sm:p-0 sm:mr-[96px] "
			}  -z-10  bg-blueMob`}>
			<ul className="flex sm:pl-10 py-12 w-full h-auto overflow-y-auto overflow-x-auto flex-col items-center pb-0 gap-1 flex-shrink-0 rounded-lg mb-12">
				<li className="flex flex-row-reverse py-1 px-3 gap-3 items-center self-stretch rounded-lg w-[1014px]">
					<ContentInMain width="w-[184px]">محتوای پنج</ContentInMain>
					<ContentInMain width="w-[184px]">محتوای چهارم</ContentInMain>
					<ContentInMain width="w-[184px]">محتوای سوم</ContentInMain>
					<ContentInMain width="w-[184px]">محتوای دوم</ContentInMain>
					<ContentInMain width="w-[184px]">محتوای اول</ContentInMain>
					<ContentInMain width="w-[34px]">روز</ContentInMain>
					<div className="flex w-24 p-2 justify-center items-center gap-2 self-stretch">
						<span className="text-black text-right font-IRANSansWeb text-xs font-light">
							مجموعه ها
						</span>
					</div>
				</li>
				{data.map((obj) => {
					return (
						<li
							key={obj.id}
							className="flex flex-row-reverse py-1 px-3 gap-3 items-center self-stretch rounded-lg w-[1014px]">
							<ContentInMain width="w-[184px]">
								{obj.content5name}
							</ContentInMain>
							<ContentInMain width="w-[184px]">
								{obj.content4name}
							</ContentInMain>
							<ContentInMain width="w-[184px]">
								{obj.content3name}
							</ContentInMain>
							<ContentInMain width="w-[184px]">
								{obj.content2name}
							</ContentInMain>
							<ContentInMain width="w-[184px]">
								{obj.content1name}
							</ContentInMain>
							<ContentInMain width="w-[34px]">{obj.day}</ContentInMain>
							<div className="flex w-24 p-2 justify-center items-center gap-2 self-stretch">
								<span className="text-black text-right font-IRANSansWeb text-xs font-light">
									{obj.name}
								</span>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const ContentInMain = ({ children, width }) => {
	return (
		<div
			className={`flex  py-2 ${width} px-[10px] justify-center items-center gap-[10px] rounded-lg bg-[#161C40]`}>
			<p className="text-white text-right font-IRANSansWeb text-xs font-light">
				{children}
			</p>
		</div>
	);
};

const SortBtn = () => {
	return (
		<button
			style={{ minHeight: "unset" }}
			className="flex p-2 px-4 hover:bg-white items-center sm:max-h-[42px] gap-2 btn border-none hover:outline hover:outline-1 outline-blue-950 transition-all duration-200 bg-white sm:w-36 justify-between">
			<h3 className="text-black hidden sm:block">فیلتر</h3>
			<SortSvg />
		</button>
	);
};

const SearchBar = () => {
	return (
		<div className="hidden sm:block">
			<label className="input input-bordered flex items-center gap-2 input-sm bg-white text-black p-5">
				<input
					type="text"
					className="grow bg-white"
					placeholder="جستوجو"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="h-4 w-4 opacity-70">
					<path
						fillRule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clipRule="evenodd"
					/>
				</svg>
			</label>
		</div>
	);
};

const PlansContent = () => {
	return (
		<>
			<SearchBar />
			<div className="dropdown dropdown-down sm:hidden">
				<button
					className="flex p-2 items-center gap-[2px] btn border-none  btn-primary bg-white m-1 sm"
					role="button"
					tabIndex={0}>
					<span className="text-black text-right font-IRANSansWeb text-sm font-normal pr-3">
						برنامه محتوایی ثابت
					</span>
					<ArrowSvg />
				</button>
				<Companies />
			</div>
		</>
	);
};

const Companies = () => {
	return (
		<ul
			tabIndex={0}
			className="dropdown-content menu bg-white rounded-box w-full p-2 shadow h-80 flex flex-nowrap overflow-y-auto">
			{dropDownContent.map((item, index) => {
				return (
					<li
						key={item.name}
						className="text-gray-800 text-right">
						<a
							className="text-right"
							key={index}>
							{item.name}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

const NavMobile = () => {
	return (
		<div className="w-full flex justify-center items-center fixed bottom-0 px-3 bg-blueMob py-5 sm:hidden ">
			<div className="bg-[#DBDBDB] h-16 w-full rounded-xl items-center self-stretch flex overflow-hidden flex-row-reverse">
				<div className="flex flex-col h-full transition-all duration-200 py-1 px-2 justify-center items-center gap-1 flex-1 cursor-pointer hover:bg-[rgb(190,190,190)] active">
					<HomeSvg />
					<p className="text-[#676D75] font-IRANSansWeb text-xs font-normal">
						خانه
					</p>
				</div>
				<div className="flex flex-col h-full transition-all duration-200 py-1 px-2 justify-center items-center gap-1 flex-1 cursor-pointer hover:bg-[rgb(190,190,190)]">
					<SearchSvg />
					<p className="text-[#676D75] font-IRANSansWeb text-xs font-normal">
						جست و جو
					</p>
				</div>
				<div className="flex flex-col h-full transition-all duration-200 py-1 px-2 justify-center items-center gap-1 flex-1 cursor-pointer hover:bg-[rgb(190,190,190)]">
					<MenuSvg />
					<p className="text-[#676D75] font-IRANSansWeb text-xs font-normal">
						منو
					</p>
				</div>
				<div className="flex flex-col h-full transition-all duration-200 py-1 px-2 justify-center items-center gap-1 flex-1 cursor-pointer hover:bg-[rgb(190,190,190)]">
					<ProfSvg />
					<p className="text-[#676D75] font-IRANSansWeb text-xs font-normal">
						پروفایل
					</p>
				</div>
			</div>
		</div>
	);
};

export default App;
