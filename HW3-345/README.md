# REST Lab & HW 3
The following exercises were completed based on [this REST repository](https://github.com/yy2111/REST). The [GitHub REST API Reference Page](https://docs.github.com/en/rest/reference) was used to complete the exercises.


## Lab Activities

### Task 1: List branches of a given repository.

Listing branches can be achieved using the `repos/{owner}/{repo}/branches` endpoint and a `GET` method. This solution uses a similar approach to what was given in the `listAuthenicatedUserRepos()` function.
```javascript
console.log(`Branches in ${owner}/${repo}:`);
var obj = JSON.parse(body);
// Log each branch in the repository to the console.
for (var i = 0; i < obj.length; i++) {
	var name = obj[i].name;
	console.log(name);
}
// Return object for people calling our method.
resolve(obj);
```

This can also be completed using the command

`curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/{owner}/{repo}/branches`

### Task 2: Create a new repository.
A new public GitHub repository can be made using the `/users/repos` endpoint and a `POST` method. Doing so required modifying the `options` object to include the name of the new repository:

```javascript
options.json = 
	{
		"name": repo,
		"has_wiki": false
	};
```

The `has_wiki` field is set to `false` to ensure that **Task 4** can run as expected.

```javascript
if (response.statusCode == 404) {
	console.log(chalk.red(`Repository ${owner}/${repo} already exists.`));
} else {
    console.log(`New repository successfully created at https://github.com/${owner}/${repo}`);
}
resolve(response.statusCode);
```

This can also be achieved using the command

```
curl \
    -X POST \ 
    -H "Accept: application/vnd.github.v3+json" \ 
    -H "Authorization: token $GITHUBTOKEN" \ 
    https://api.github.com/user/repos \ 
    -d '{"name":"{name}"}'
```

## Homework Activities

### Task 3: Create an issue.
Creating issues for a repository can be done using the `/repos/{owner}/{repo}/issues` endpoint and a `POST` method. Similarly to **Task 2**, the `options` object must be modified to include the title and body of the new issue:

```javascript
options.json = 
    {
        "title": issueName,
        "body": issueBody
    };
```
As there is no need to check for the existence of an issue with the same title and body, the code can be simplified to:

```javascript
console.log(`New issue \"${issueName}\" successfully created`);
resolve(response.statusCode);
```

This can also be achieved using the command

```
curl \
	-X POST \
	-H "Accept: application/vnd.github.v3+json" \ 
	-H "Authorization: token $GITHUBTOKEN" \
	https://api.github.com/repos/Tyler-Seliber/Created-From-REST/issues \
 	-d '{"title":"{issueName}","body":"{issueBody}"}'
```

### Task 4: Enable wiki support.

Enabling wiki support can be done through the `/repos/{owner}/{repo}` endpoint and using a `PATCH` method. The `obj` object must be modified to include the `has_wiki` field:

```javascript
options.json = 
    {
        "has_wiki": true
    };
```

The code for completing this task is also simplified:

```javascript
console.log(`Wiki support has been enabled for ${owner}/${repo}`);
resolve(body);
```

This can also be achieved using the command

```
curl \
    -X PATCH \
    -H "Accept: application/vnd.github.v3+json" \ 
    -H "Authorization: token $GITHUBTOKEN" \
    https://api.github.com/repos/Tyler-Seliber/Created-From-REST \
    -d '{"has_wiki":true}'
```

### Task 5: REST Server
The video demonstration for the REST Server exercise is available in the [`REST Server Exercise.mov`](https://github.com/Tyler-Seliber/SSW-345/blob/HW3/HW3-345/REST%20Server%20Exercise.mov) file.
