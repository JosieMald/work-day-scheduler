# Work Day Scheduler

## [Site](https://josiemald.github.io/work-day-scheduler/)

## [Repository](https://github.com/JosieMald/work-day-scheduler)

![Work Day Planner](img here)

### Project

```
Wrote javascript for work day planner. 

* jQuery set up functionality to dynamically create each row and append items. 
  - Event delegation so each row changes color depending on past, present, and future time.
  - User input gets store in local storage and user can see data when they refresh the page.

* Moment was used to display current time and date as well as calculating due date.
```
### Description

When the user opens the page they are able to see the current date and are presented with timeblocks with standard business hours. Each timeblock is color coded to indicate whether it is in the past, present, or future. When the user clicks the timeblocks they can enter an event and clicking the save button for that timeblock saves that event in local storage.  When the page is refreshed the saved event persists.