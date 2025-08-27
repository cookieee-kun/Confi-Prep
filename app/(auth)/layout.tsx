import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import React from 'react'
import { ReactNode } from 'react'
import { is } from 'zod/v4/locales'

const AuthLayout = async ({ children } : {children: ReactNode}) => {
	const issuserAuthenticated = await isAuthenticated();
	if(issuserAuthenticated) redirect("/");
	return (
		<div className = "auth-layout">
			{children}
		</div>
	)
}

export default AuthLayout
