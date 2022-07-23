import React from "react";

import { Modal } from "antd";

const CommonModal = ({
	setIsModalVisible,
	isModalVisible,
	children,
	width,
}) => {
	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<div>
			<Modal
				width={width}
				title="Basic Modal"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				{children}
			</Modal>
		</div>
	);
};

export default CommonModal;
