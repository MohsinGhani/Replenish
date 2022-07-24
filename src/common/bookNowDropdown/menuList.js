import { Menu } from "antd";
import Link from "next/link";

export const MenuList = (
	<Menu
		selectable
		items={[
			{
				key: "1",
				label: <Link href="#">Botox/Dermal Fillers</Link>,
			},
			{
				key: "2",
				label: (
					<Link href="#">
						<a>Bio identical Hormone Replacement Therapy</a>
					</Link>
				),
			},
			{
				key: "3",
				label: (
					<Link href="#">
						<a>Testosterone Replacement Therapy</a>
					</Link>
				),
			},
			{
				key: "4",
				label: (
					<Link href="#">
						<a>Peptides (Sermorelin / Ipamorelin)</a>
					</Link>
				),
			},
			{
				key: "5",
				label: (
					<Link href="#">
						<a>Medical Weight Loss</a>
					</Link>
				),
			},
			{
				key: "6",
				label: (
					<Link href="#">
						<a>IV Drips (We can come to you)</a>
					</Link>
				),
			},
			{
				key: "7",
				label: (
					<Link href="#">
						<a>Erectile Dysfunction (Sildenafil/Tadalafil)</a>
					</Link>
				),
			},
			{
				key: "8",
				label: (
					<Link href="#">
						<a>Erectile Dysfunction (Sildenafil/Tadalafil)</a>
					</Link>
				),
			},
			{
				key: "9",
				label: (
					<Link href="#">
						<a>Addiction Medicine (suboxone)</a>
					</Link>
				),
			},
			{
				key: "10",
				label: (
					<Link href="#">
						<a>Personal Training</a>
					</Link>
				),
			},
			{
				key: "11",
				label: (
					<Link href="#">
						<a>Nutrition Counseling</a>
					</Link>
				),
			},
			{
				key: "12",
				label: (
					<Link href="#">
						<a>Mobile Labwork</a>
					</Link>
				),
			},
		]}
	/>
);
