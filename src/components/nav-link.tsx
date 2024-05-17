import Link, { LinkProps } from 'next/link'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
    return (
        <Link 
        className='flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground' 
        {...props} />
    )
}