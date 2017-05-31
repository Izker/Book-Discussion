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

function HomebuttonClick(event){
  ga('send', {
    hitType: 'event',
    eventCategory: 'Homebtn',
    eventAction: 'Click',
    eventLabel: 'Homebtn'
  });
}

function LogoClick(event){
  ga('send', {
    hitType: 'event',
    eventCategory: 'Logobtn',
    eventAction: 'Click',
    eventLabel: 'Logobtn'
  });
}

function ViewallClick(event) {
  ga('send', {
    hitType: 'event',
    eventCategory: 'ViewAll',
    eventAction: 'Click',
    eventLabel: 'ViewAll'
  });
}

function SearchClick(event) {
  ga('send', {
    hitType: 'event',
    eventCategory: 'TimKiem',
    eventAction: 'Click',
    eventLabel: 'Search'
  });

}
