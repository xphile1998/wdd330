// commentModel code
class commentModel {
    // Build the constructor
    constructor(type) {
        this.type = type;
        this.comments = readComments(this.type) || [];
    }

    // getComments code
    getComments(q = null) {
        if (q === null) {
            return this.comments;
        } else {
            return this.comments.filter(el => el.name === q);
        }
    }

    // addComment code
    addComment(postName, comment) {
        const newComment = {
            name: postName,
            date: new Date(),
            comment: comment
        };
        this.comments.push(newComment);
        writeComments(this.type, this.comments);
    }
}
// writeComments to LS code
function writeComments(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

// readComments from LS code
function readComments(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

// Creating a comment constant for use in the Comments class
const commentUL = `
<div class="addComment">
    <h2>Add a Comment</h2>
    <input type="text" id="commentEntry" />
    <button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>
`;

// Render the comment list
function renderCommentList(element, comments) {
    // clear out any comments that might be listed
    element.innerHTML = '';
    // add the new list of comments
    comments.forEach(el => {
      let item = document.createElement('li');
      item.innerHTML = `
              ${el.name}: ${el.comment}
        `;
  
      element.appendChild(item);
    });
  }

// Create the Comments class
class Comments {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.model = new commentModel(this.type);
    }

    // addSubmitListener
    addSubmitListener(postName) {
        // Supposed to use .ontouchend, but I am using .onclick to work with a non-touch screen
        document.getElementById('commentSubmit').onclick = () => {
            this.model.addComment(postName, document.getElementById('commentEntry').value);
            document.getElementById('commentEntry').value = '';
            this.showCommentList(postName);
        };
    }

    // showCommentList
    showCommentList(q) {
        try {
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');
            // check to see if the commentUI code has been added yet
            if (parent.innerHTML === '') {
                parent.innerHTML = commentUL;
            }
            if (q !== null) {
                // looking at one post, show comments and new comment button
                document.querySelector('.addComment').style.display = 'block';
                this.addSubmitListener(q);
            } else {
                // no post name provided, hide comment entry
                document.querySelector('.addComment').style.display = 'none';
            }
            // get the comments from the model
            let comments = this.model.getComments(q);
            if (comments === null) {
                // avoid an error if there are no comments yet.
                comments = [];
            }
            renderCommentList(parent.lastChild, comments);
        } catch (error) {
            console.log(error);
        }
    }
}

export default Comments;