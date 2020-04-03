import React from 'react'
import './Footer.css'

export default function Header(){
    return(
        <div className="footer-class">
            <ul class="foot-top-nav foot-nav-ul">
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-about">About</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-jobs">Jobs</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-blog">Blog</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-developers">Developers</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-guidelines">Guidelines</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-privacy">Privacy</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-terms">Terms</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-help">Help</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="footer-abuse">Report abuse</a></li>
				<li class="foot-li"><a href="/" class="footer-link" data-track="">Help forum</a></li>
			</ul>
        </div>
    );
}