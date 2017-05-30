function BookDetailClick(event) {
  ga('send', {
    hitType: 'event',
    eventCategory: 'BookDetail',
    eventAction: 'Click',
    eventLabel: 'Booktital'
  });
}

function CriteriaClick(event) {
  ga('send', {
    hitType: 'event',
    eventCategory: 'BookCriteria',
    eventAction: 'Click',
    eventLabel: 'Star'
  });
}

function CommentClicks(event) {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Comment',
    eventAction: 'Click',
    eventLabel: 'comment'
  });
}

// function BClicks(event) {
//   ga('send', {
//     hitType: 'event',
//     eventCategory: 'BookDetail',
//     eventAction: 'Click',
//     eventLabel: ''
//   });
// }

function SearchClick(event) {
  ga('send', {
    hitType: 'event',
    eventCategory: 'TimKiem',
    eventAction: 'Click',
    eventLabel: 'Search'
  });

}
