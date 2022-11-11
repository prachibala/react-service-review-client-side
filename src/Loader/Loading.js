const Loading = () => {
	return (
		<>
			<div className="flex items-center justify-center space-x-2">
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-error"></div>
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-error"></div>
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-error"></div>
			</div>
		</>
	);
};

export default Loading;
