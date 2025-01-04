"use client"

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCode, FaMobileAlt, FaBullhorn, FaChalkboardTeacher } from 'react-icons/fa';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ComponentRef } from 'react';

const serviceLinks = [
    {
        title: 'Web Development',
        href: '/services/web-development',
        description: 'Design responsive, visually stunning websites that enhance your brand, engage audiences and drive results. We deliver customized digital solutions to make your online presence stand out.',
        icon: <FaCode className="w-4 h-4" />
    },
    {
        title: 'Apps Development',
        href: '/services/apps-development',
        description: 'Build innovative mobile and web applications tailored to your business needs. Our apps priotize functionality, user experience and modern design to keep your business ahead in the digital age.',
        icon: <FaMobileAlt className="w-4 h-4" />
    },
    {
        title: 'Digital Marketing',
        href: '/services/digital-marketing',
        description: 'Boost your branch with tailored digital marketing strategies, including SEO, social media, email marketing and more. Connect with your audience, increase visibility and achieve measurable growth in the online marketplace.',
        icon: <FaBullhorn className="w-4 h-4" />
    },
    {
        title: 'IT Training',
        href: '/services/it-training',
        description: 'Gain essential IT skills with expert-led training programs. We offer practical learning for individuals and teams, empowering success in today’s competitive, tech-driven world.',
        icon: <FaChalkboardTeacher className="w-4 h-4" />
    },
];

export default function Navigation() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        return pathname === path || pathname?.startsWith(path + '/');
    };

    return (
        <NavigationMenu className='hidden md:block text-primary w-full'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                isActive('/') ? 'text-winny !important' : ''
                            )}
                        >
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-off-black rounded-md'>
                            {serviceLinks.map((service) => (
                                <ListItem
                                    key={service.title}
                                    title={service.title}
                                    href={service.href}
                                    icon={service.icon}
                                >
                                    {service.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/shop' legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                isActive('/shop') ? 'text-winny !important' : ''
                            )}
                        >
                            Shop
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/about' legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                isActive('/about') ? 'text-winny !important' : ''
                            )}
                        >
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/contact' legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                isActive('/contact') ? 'text-winny !important' : ''
                            )}
                        >
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    ComponentRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link> & { icon?: React.ReactNode; title: string; children: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pure-black hover:text-winny focus:bg-pure-black focus:text-winny text-yelly',
                        className
                    )}
                    {...props}
                >
                    <div className='text-sm font-medium leading-none flex items-center gap-2'>
                        {icon}
                        {title}
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-graphite-gray'>
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
