/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'https://www.grupocibernos.com/hs-fs/hubfs/desarrollo%20de%20software%20a%20medida.jpg?width=960&name=desarrollo%20de%20software%20a%20medida.jpg',
		title: 'GLOBALMVM',
		skills: ['Angular 15', 'Java Spring 3', 'HTML', 'CSS', 'SASS'],
		descripcion:
			'Como Desarrollador Senior, participé en el diseño y desarrollo de aplicaciones SPA utilizando Angular 15. Además, desarrollé BACKENDs con Java Spring 3, y fui responsable del desarrollo de componentes de interfaz de usuario y maquetado de páginas web, colaborando efectivamente con equipos multidisciplinarios.',
		demoURL: '',
		repoURL: 'https://github.com/Hrincon1055',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://www.grupocibernos.com/hs-fs/hubfs/desarrollo%20de%20software%20a%20medida.jpg?width=960&name=desarrollo%20de%20software%20a%20medida.jpg',
		title: 'ASESOFTWARE',
		skills: [
			'Angular 13',
			'Angular 14',
			'React 17',
			'Node.js 16',
			'HTML',
			'CSS',
			'SASS',
		],
		descripcion:
			'En mi rol como Desarrollador Senior, me encargué del diseño y desarrollo de aplicaciones SPA utilizando Angular 13, 14, y React 17. Desarrollé BACKENDs con Node.js 16 y fui responsable del desarrollo de componentes de interfaz de usuario y maquetado de páginas web, logrando implementar soluciones creativas para problemas complejos.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://www.grupocibernos.com/hs-fs/hubfs/desarrollo%20de%20software%20a%20medida.jpg?width=960&name=desarrollo%20de%20software%20a%20medida.jpg',
		title: 'VASSLATAM',
		skills: [
			'React 16',
			'React Native 0.62',
			'Node.js 16',
			'HTML',
			'CSS',
			'SASS',
		],
		descripcion:
			'Como Desarrollador Junior, me especialicé en el diseño y desarrollo de aplicaciones web y móviles utilizando React 16 y React Native 0.62. Además, desarrollé BACKENDs con Node.js 16 y fui responsable de la maquetación de páginas web, asegurando una experiencia de usuario optimizada.',
		demoURL: '',
		repoURL: 'https://github.com/Hrincon1055',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://www.grupocibernos.com/hs-fs/hubfs/desarrollo%20de%20software%20a%20medida.jpg?width=960&name=desarrollo%20de%20software%20a%20medida.jpg',
		title: 'FARMATODO',
		skills: ['React 17', 'Oracle', 'SQL Server', 'MySQL', 'VBA'],
		descripcion:
			'En mi posición como Ingeniero de Aplicaciones, desarrollé y mantuve aplicaciones web utilizando React 17, mientras proporcionaba soporte y administración de bases de datos como Oracle, SQL Server, y MySQL. Además, implementé automatización de tareas mediante VBA para mejorar la eficiencia.',
		demoURL: '',
		repoURL: 'https://github.com/Hrincon1055',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://www.grupocibernos.com/hs-fs/hubfs/desarrollo%20de%20software%20a%20medida.jpg?width=960&name=desarrollo%20de%20software%20a%20medida.jpg',
		title: 'CIREC',
		skills: ['Oracle', 'SQL Server', 'MySQL', 'Windows', 'Linux'],
		descripcion:
			'Como Coordinador, me enfoqué en la implementación y desarrollo de bases de datos utilizando Oracle, SQL Server, y MySQL. Además, proporcioné soporte a la infraestructura y administración de servidores Windows y Linux, asegurando la continuidad del negocio y mejorando la eficiencia de los procesos.',
		demoURL: '',
		repoURL: 'https://github.com/Hrincon1055',
		anim: 'fade-right',
	},
];

const skillIcons = {
	// JavaScript: 'skill-icons:javascript',
	// React: 'skill-icons:react-dark',
	// Astro: 'skill-icons:astro',
	// CSS: 'skill-icons:css',
	// Sass: 'skill-icons:sass',
	// StyledComponents: 'skill-icons:styledcomponents',
	// Bootstrap: 'skill-icons:bootstrap',
	// Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
