import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFire } from 'angularfire2';
import { LoginHelper } from '../helpers';

declare const $:any;
declare const Materialize:any;
const ARTICLES = [
	{
		title: 'Hello World',
		content: 'ads'
	},
	{
		title: 'Woild',
		content: "I don't know what it is"
	}
]

@Component({
  selector: 'articles',
  templateUrl: './articles.html'
})

export class BlogComponent implements OnInit {
	articles: any
	blog: Object
	user: any
	login_helper: LoginHelper
	firebase: AngularFire

	constructor(lh: LoginHelper, af: AngularFire) {
		this.login_helper = lh;
		this.firebase = af;
		this.articles = [];
	}

	ngOnInit() {
		this.firebase.database.list('/articles').subscribe(items => {
			this.articles = items.map(article => {
				article.likes = article.likes || []
				article.liked = () => {
					for (var key in article.likes) {
						if(article.likes[key] == this.login_helper.user.uid)
							return true
					}
						return false
				}
				article.creator = this.firebase.database.object(`/users/${article.uid}`)
				article.likeOrUnlike = () => {
					let ref = this.firebase.database.list(`/articles/${article.$key}/likes`)
					if(article.liked()) {
						for(var i in article.likes) {
							if(article.likes[i] == this.login_helper.user.uid) {
								ref.remove(i)
								Materialize.toast('unliked', 1000)
							}
						}
					} else {
							ref.push(this.login_helper.user.uid)
							Materialize.toast('liked', 1000)
						}
					}
					article.likeCount = Object.keys(article.likes).length
					return article;
				}
			)
		})
		this.blog = {
			uid: this.login_helper.user.uid
		}
	}

	saveBlog() {
		this.firebase.database.list(`/articles`).push(this.blog).then(() => {
			Materialize.toast('Blog created', 1000)
		})
		this.blog = {}
	}

	deleteBlog(id){
		this.firebase.database.object(`/articles/${id}`).remove().then(() => {
			Materialize.toast('Blog deleted', 1000)
		})
	}

	creator(id) {
		return this.firebase.database.object(`/users/${id}`).subscribe( data => data)
	}
}