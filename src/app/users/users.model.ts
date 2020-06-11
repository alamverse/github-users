export class User {
    public login: string;
    public id: number;
    public node_id: string;
    public avatar_url: string;
    public gravatar_id: string;
    public url: string;
    public html_url: string;
    public followers_url: string;
    public following_url: string;
    public gists_url: string;
    public starred_url: string;
    public subscriptions_url: string;
    public organizations_url: string;
    public repos_url: string;
    public events_url: string;
    public received_events_url: string;
    public type: string;
    public site_admin: boolean;

    private constructor(d: any) {
        this.login = d.login;
        this.id = d.id;
        this.node_id = d.node_id;
        this.avatar_url = d.avatar_url;
        this.gravatar_id = d.gravatar_id;
        this.url = d.url;
        this.html_url = d.html_url;
        this.followers_url = d.followers_url;
        this.following_url = d.following_url;
        this.gists_url = d.gists_url;
        this.starred_url = d.starred_url;
        this.subscriptions_url = d.subscriptions_url;
        this.organizations_url = d.organizations_url;
        this.repos_url = d.repos_url;
        this.events_url = d.events_url;
        this.received_events_url = d.received_events_url;
        this.type = d.type;
        this.site_admin = d.site_admin;
    }
}