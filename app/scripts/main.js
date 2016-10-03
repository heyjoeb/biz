'use strict';
/*jshint camelcase: false */
/* global $, Mustache */
/*eslint-disable no-unused-vars*/
$(document).ready(function() {
    // GET INBOX.JSON
    $.getJSON('scripts/inbox.json', function(data) {
        var template = $('#theProcess').html();
        var html = Mustache.to_html(template, data);
        $('#processList').html(html);
    });
    // GET PROCESS DETAIL IN CASES.JSON
    $.getJSON('scripts/cases.json', function(data) {
        var template = $('#theCase').html();
        var html = Mustache.to_html(template, data);
        $('#processDetail').html(html);
    });
});
window.onload = function() {
    // SELECT CASE DETAILS
    var caseTrigger = '.case-trigger';
    $(document).on('click', caseTrigger, function(e) {
        e.preventDefault();
        $('.instructions').hide();
        $(caseTrigger).removeClass('active');
        $(this).addClass('active');
        $('.a-case').removeClass('active');
        $('.a-case[data-id=' + $(this).attr('id') + ']').addClass('active');
    });

    // APPROVE CASE
    var approveTrigger = '.sure';
    $(document).on('click', approveTrigger, function(e) {
        e.preventDefault();
        $('.process[data-approval=' + $(this).attr('data-approve') + ']').addClass('approved');
        $('.process-status-text[data-approval=' + $(this).attr('data-approve') + ']').text('Approved');
        $('.approval[data-approval=' + $(this).attr('data-approve') + ']').hide();
    });

    // DENY CASE
    var denyTrigger = '.nope';
    $(document).on('click', denyTrigger, function(e) {
        e.preventDefault();
        $('.process[data-approval=' + $(this).attr('data-approve') + ']').addClass('denied');
        $('.process-status-text[data-approval=' + $(this).attr('data-approve') + ']').text('Denied');
        $('.approval[data-approval=' + $(this).attr('data-approve') + ']').hide();
    });
};
