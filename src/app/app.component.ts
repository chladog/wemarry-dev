import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wm-dev',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  view = 'elements';
  data: any;
  constructor(private http: HttpClient) {
    this.view = localStorage.getItem('wm-dev-view') || 'elements';
  }
  ngOnInit(): void {
    this.http
      .post('/api/graphql?locale=cs&fallbackLocale=cs', {
        operationName: 'Wedding',
        variables: { weddingId: '62ac676b6a90bf51b2e926d5' },
        query:
          'query Wedding($weddingId: String!) {  Wedding(id: $weddingId) {    ...Wedding    __typename  }}fragment Wedding on Wedding {  id  owner {    id    __typename  }  updatedAt  createdAt  spouses {    person_1 {      fullname      gender      __typename    }    person_2 {      fullname      gender      __typename    }    newFamilyName    __typename  }  intro {    pretitle    title    subtitle    backgroundImage {      ...WeddingImage      __typename    }    __typename  }  other {    enabled    title    text    shortTitle    sections {      title      text      id      __typename    }    __typename  }  whenAndWhere {    title    shortTitle    enabled    dates {      dateStart      __typename    }    rowWhenAndWhere {      sections {        id        icon        title        text        mapMarker {          marker          displayName          __typename        }        id        __typename      }      __typename    }    __typename  }  transportAndAccommodation {    transport {      enabled      title      shortTitle      text      __typename    }    accommodation {      enabled      title      shortTitle      text      __typename    }    __typename  }  dresscode {    enabled    importance    shortTitle    title    text    images {      image1 {        ...WeddingImage        __typename      }      image2 {        ...WeddingImage        __typename      }      __typename    }    colors {      id      color      name      __typename    }    __typename  }  gallery {    layout    gallery {      media {        id        ...WeddingImage        __typename      }      __typename    }    __typename  }  vip {    enabled    title    shortTitle    text    persons {      id      image {        ...WeddingImage        __typename      }      person {        fullname        title        __typename      }      __typename    }    __typename  }  timeline {    enabled    shortTitle    title    text    timeline {      title      text      id      __typename    }    __typename  }  menu {    enabled    shortTitle    title    text    menu {      id      title      text      __typename    }    __typename  }  wishlist {    enabled    shortTitle    title    text    __typename  }  rsvp {    enabled    title    shortTitle    text    label {      email      fullname      willAttend      attending      not_attending      additionalGuests      additionalChildren      additionalGuestsMax      additionalChildrenMax      __typename    }    form {      ... on FormText {        blockType        label        type        required        note        __typename      }      ... on FormSelect {        label        required        note        blockType        options {          option          id          __typename        }        __typename      }      ... on FormNumber {        label        note        min        max        defaultValue        required        blockType        __typename      }      __typename    }    __typename  }  guests {    list {      email      fullname      attendance      additionalGuests      additionalChildren      token      rsvpId      rsvpSentAt      id      __typename    }    __typename  }  settings {    visibility    password    customLabel    localization {      default {        code        native        __typename      }      languages {        code        native        __typename      }      __typename    }    __typename  }  style {    template {      id      slug      selector      __typename    }    __typename  }  readonly {    status    paidAt    platform {      domain      __typename    }    domain    __typename  }  editors {    email    id    __typename  }  __typename}fragment WeddingImage on WeddingMedia {  id  url  mimeType  width  height  alt  webp {    url    height    width    __typename  }  __typename}',
      })
      .subscribe((data: any) => {
        this.data = data.data.Wedding;
      });
  }

  toggleView() {
    if (this.view === 'elements') {
      this.view = 'content';
    } else {
      this.view = 'elements';
    }
    localStorage.setItem('wm-dev-view', this.view);
  }
}
