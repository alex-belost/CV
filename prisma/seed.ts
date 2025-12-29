import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Clean existing data
    await prisma.socialLink.deleteMany()
    await prisma.profile.deleteMany()
    await prisma.experience.deleteMany()
    await prisma.project.deleteMany()
    await prisma.skill.deleteMany()

    // Create Profile
    const profile = await prisma.profile.create({
        data: {
            name: 'Oleksandr Bilostotskyi',
            title: 'Front End developer',
            summary: `I possess extensive front-end development experience, having honed skills in building reliable application architectures, clean markup, and solid logic. I work professionally with Angular and am also proficient in Vue, React, and React Native—demonstrating dedication to the craft. This pursuit of excellence includes deep mastery of Figma workflows, structural design, and various design methodologies. My current focus is creating user-interface applications, animations, and enhancing UX. I have a proven track record in developing monorepositories and component libraries, and my passion for front-end development continually drives my growth in the field.

Education:
- Bachelor's, Kharkiv National Automobile and Highway University, Kharkiv (Sep 2007 - June 2011) - Automation and Computer-Integrated Technologies

Languages Spoken:
- English - Upper Intermediate
- Ukrainian - Fluent
- Russian - Fluent`,
            email: 'alex.belost@gmail.com',
            location: 'Ukraine, Kharkiv',
            socials: {
                create: [
                    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/alexbelost/' },
                    { platform: 'GitHub', url: 'https://github.com/alexbelost' },
                ],
            },
        },
    })

    // Create Experience
    await prisma.experience.create({
        data: {
            company: 'Trisk',
            position: 'Front End Developer',
            startDate: new Date('2024-10-01'),
            description: `AI-driven Conversational Process Automation: Workflows for SMBs and Enterprises: Client Onboarding to Complex Process.

As a front-end developer, I managed the full lifecycle of the product's client side on Angular 13+ (TypeScript, RxJS, NgRx): designed and implemented new features, refactored legacy code, built a modular UI architecture following DDD and Atomic Design principles, maintained a shared design system, configured GitLab CI and Docker pipelines for automated builds and deployment, actively participated in code reviews, and collaborated closely with the backend developer and QA engineer, which enhanced product stability and accelerated the rollout of new features to production.`,
            technologies: JSON.stringify(['TypeScript', 'JavaScript', 'Angular', 'HTML', 'CSS', 'SCSS', 'Git', 'RxJs', 'NgRx', 'Figma', 'Stylelint', 'ESLint', 'Tailwind CSS', 'PHP', 'Shell scripts', 'CICD', 'WebSockets']),
        },
    })

    await prisma.experience.create({
        data: {
            company: 'Paymentop',
            position: 'Front End Developer',
            startDate: new Date('2023-06-01'), // June 2023
            endDate: new Date('2024-10-01'),
            description: `Paymentop is a comprehensive payment processing platform designed to streamline transactions, enhance security, and provide detailed analytics for businesses of all sizes.

In this role, I have been responsible for both the UI and UX front-end development, ensuring a seamless and engaging user experience. My responsibilities included leading the front-end development team, overseeing the technical code quality, and ensuring the implementation of best practices in software development. Key projects involved building and optimizing user interfaces, integrating complex payment functionalities, and maintaining high performance and responsiveness across various devices.`,
            technologies: JSON.stringify(['TypeScript', 'JavaScript', 'Angular', 'React', 'Next.js', 'HTML', 'CSS', 'SCSS', 'SASS', 'Git', 'Webpack', 'RxJs', 'Figma', 'GSAP', 'Stylelint', 'ESLint', 'jQuery', 'Tailwind CSS', 'PHP', 'WordPress', 'Shell scripts']),
        },
    })

    await prisma.experience.create({
        data: {
            company: "Artur'In",
            position: 'Front End developer',
            startDate: new Date('2020-02-01'), // Feb 2020
            endDate: new Date('2023-06-01'), // June 2023
            description: `A marketing platform providing comprehensive planning tools, advanced customization features, and in-depth analytics to enhance decision-making and customer engagement.

This project involved building an application from scratch, including the development of a proprietary component library. The application was tailored to accommodate three distinct company/support/client-based apps, all consolidated under a monorepository. Features included integrated social network connectivity and posting capabilities, as well as the incorporation of code quality tools to maintain high standards in software development.`,
            technologies: JSON.stringify(['TypeScript', 'JavaScript', 'Angular', 'Vue.js', 'BEM', 'CSS3', 'HTML', 'SCSS', 'SASS', 'Git', 'Webpack', 'RxJs', 'Figma', 'Zeplin', 'GSAP', 'Stylelint', 'ESLint', 'jQuery', 'Ionic']),
        },
    })

    await prisma.experience.create({
        data: {
            company: 'Daxx Software Development Teams, Artur\'In',
            position: 'Front End Developer',
            startDate: new Date('2018-08-01'), // Aug 2018
            endDate: new Date('2020-02-01'), // Feb 2020
            description: 'Worked at Artur\'In through the Daxx company.',
            technologies: JSON.stringify(['JavaScript', 'HTML', 'CSS']), // Minimal stack as it's part of Artur'In
        },
    })

    await prisma.experience.create({
        data: {
            company: 'GlobalLogic',
            position: 'Software Engineer',
            startDate: new Date('2018-01-01'), // Jan 2018
            endDate: new Date('2018-08-01'), // Aug 2018
            description: `A dynamic platform offering real-time tracking of currency and cryptocurrency exchange rates, empowering users to make informed financial decisions. This platform facilitates seamless transactions, ensuring secure and efficient trading in the global financial market.

The project involved supporting and enhancing project features, updating and improving data visualization using the Chart.js library, and ensuring timely resolution of customer issues, contributing to improved user experience and customer satisfaction.`,
            technologies: JSON.stringify(['Ionic', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'CSS3', 'Git', 'Webpack', 'RxJs', 'Zeplin', 'jQuery']),
        },
    })

    await prisma.experience.create({
        data: {
            company: 'BRANDER',
            position: 'Front End Developer',
            startDate: new Date('2016-10-01'), // Oct 2016
            endDate: new Date('2018-01-01'), // Jan 2018
            description: `A versatile web studio specializing in delivering a broad range of digital solutions including e-commerce platforms, mobile applications, web development, and comprehensive marketing services. Committed to helping businesses thrive online through innovative, tailored solutions.

The project involved the creation of numerous e-commerce platforms and web pages, as well as the maintenance and support of existing resources, effectively enhancing user engagement and driving business growth.

The project presented significant challenges, particularly in developing flexible templates for Magento and WordPress to create optimal solutions for customers. Balancing the requirements and expectations was crucial to the success of the project, leading to innovative problem-solving and customer satisfaction.`,
            technologies: JSON.stringify(['Angular', 'React', 'Backbone.js', 'Marionette', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'Less', 'CSS3', 'Git', 'Webpack', 'RxJs', 'Zeplin', 'jQuery', 'WebSocket', 'Magento', 'WordPress', 'Vue.js']),
        },
    })

    // Create Skills (Consolidated from CV list)
    await prisma.skill.createMany({
        data: [
            // Languages
            { category: 'Languages', name: 'JavaScript (ES5+)' },
            { category: 'Languages', name: 'TypeScript' },
            { category: 'Languages', name: 'Lua' },
            { category: 'Languages', name: 'PHP' },
            // Frameworks
            { category: 'Frameworks', name: 'Angular 2+' },
            { category: 'Frameworks', name: 'React' },
            { category: 'Frameworks', name: 'React Native' },
            { category: 'Frameworks', name: 'Vue.js' },
            { category: 'Frameworks', name: 'Backbone.js' },
            { category: 'Frameworks', name: 'Ionic' },
            { category: 'Frameworks', name: 'Next.js' },
            // Tools & Tech
            { category: 'Tools', name: 'Tailwind CSS' },
            { category: 'Tools', name: 'Bootstrap' },
            { category: 'Tools', name: 'SASS/SCSS/LESS' },
            { category: 'Tools', name: 'HTML5/CSS3' },
            { category: 'Tools', name: 'BEM' },
            { category: 'Tools', name: 'jQuery' },
            { category: 'Tools', name: 'WebSockets' },
            { category: 'Tools', name: 'Git' },
            { category: 'Tools', name: 'Gulp/Webpack/Vite' },
            { category: 'Tools', name: 'Jira' },
            { category: 'Tools', name: 'Redux/NgRx' },
            { category: 'Tools', name: 'RxJS' },
            { category: 'Tools', name: 'Figma/Zeplin/Photoshop' },
            { category: 'Tools', name: 'GSAP' },
            { category: 'Tools', name: 'WordPress/Magento' },
            { category: 'Tools', name: 'Docker/CI/CD' },
        ],
    })

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
